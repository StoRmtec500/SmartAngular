using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Vouchers.Api
{
    [Route("api/[controller]")]
    public class VouchersController : Controller
    {
        private VouchersDBContext ctx;

        public VouchersController(VouchersDBContext context)
        {
            ctx = context;
        }

        [HttpGet]
        public IEnumerable<Voucher> Get()
        {
            var vouchers = ctx.Vouchers.OrderByDescending(v => v.Date).ToList();
            return vouchers;
        }

        // GET: http://localhost:8022/api/vouchers/1
        [HttpGet("{id}")]
        public Voucher Get(int id)
        {
            return ctx.Vouchers.Include(f => f.Details).FirstOrDefault(v => v.ID == id);
        }

        // GET: http://localhost:8022/api/vouchers/vm/1
        [Route("vm/{id}")]
        public VoucherDetailsViewModel GetVoucherVM(int id)
        {
            VoucherDetailsViewModel result = new VoucherDetailsViewModel();
            if (id == 0)
            {
                result.CurrentVoucher = new Voucher();
            }
            else
            {
                result.CurrentVoucher = ctx.Vouchers.FirstOrDefault(f => f.ID == id);
                if (result.CurrentVoucher != null)
                {
                    result.Details = ctx.VoucherDetails.Where(f => f.VoucherID == id).ToList();
                    if (result.Details.Any())
                    {
                        result.EditDetail = result.Details[0];
                    }
                }
            }
            result.Accounts = ctx.BalanceAccounts.Where(f => f.Expense == result.CurrentVoucher.Expense).ToList();
            return result;
        }

        [HttpPost]
        public int Edit([FromBody] Voucher value)
        {
            if (value.ID == 0)
            {
                ctx.Vouchers.Add(value);
            }
            else
            {
                ctx.Vouchers.Attach(value);
                ctx.Entry(value).State = EntityState.Modified;
            }
            ctx.SaveChanges();
            return value.ID;
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var v = ctx.Vouchers.FirstOrDefault(f => f.ID == id);
            if (v != null)
            {
                ctx.Remove(v);
                ctx.SaveChanges();
            }
        }

        [Route("GetSum/{expenses}")]
        public string GetSum(bool expenses)
        {
            string result = expenses ? "Total Expenses: " : "Total Income: ";
            var accts = ctx.BalanceAccounts.Where(f => f.Expense == expenses).Select(f => f.ID).ToList();
            var vds =
                ctx.VoucherDetails.Where(f => f.Account != null && accts.Contains(f.AccountID)).Sum(f => f.Amount);
            return result + vds;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Vouchers.Api
{
    [Route("api/[controller]")]
    public class VoucherDetailsController : Controller
    {
        private VouchersDBContext ctx;
        public VoucherDetailsController(VouchersDBContext context)
        {
            ctx = context;
        }

        [HttpPost]
        public void Edit([FromBody]VoucherDetail value)
        {
            if (value.ID == 0)
            {
                ctx.VoucherDetails.Add(value);
            }
            else
            {
                ctx.VoucherDetails.Attach(value);
                ctx.Entry(value).State = EntityState.Modified;
            }
            ctx.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var vd = ctx.VoucherDetails.FirstOrDefault(v => v.ID == id);
            if (vd != null)
            {
                ctx.Remove(vd);
                ctx.SaveChanges();
            }
        }
    }

}

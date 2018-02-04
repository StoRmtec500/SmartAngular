using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Vouchers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        private readonly VouchersDBContext ctx;

        public AccountsController(VouchersDBContext context)
        {
            ctx = context;
        }

        [HttpGet]
        public IEnumerable<BalanceAccount> Get()
        {
            return ctx.BalanceAccounts;
        }        
    }
}
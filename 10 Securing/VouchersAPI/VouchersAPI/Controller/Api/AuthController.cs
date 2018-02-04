using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.ExpressionVisitors.Internal;

namespace Vouchers.Controller.Api
{
    [Route("api/[controller]")]
    public class AuthController : Microsoft.AspNetCore.Mvc.Controller
    {
        
        [HttpGet]
        [Route("getWinUser")]
        public string Get()
        {
            return HttpContext.User.Identity is WindowsIdentity ? ((WindowsIdentity) HttpContext.User.Identity).Name : "Not Authenticated";
        }
        
    }
}

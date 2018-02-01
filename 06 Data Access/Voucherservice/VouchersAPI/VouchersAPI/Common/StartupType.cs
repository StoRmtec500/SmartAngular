using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Vouchers;

namespace VouchersNetCore.Common
{
    public enum StartupType
    {
        StaticFile,
        Mvc
    }

    public class ApiResponse
    {
        public bool Status { get; set; }
        public Voucher Voucher { get; set; }
    }

}

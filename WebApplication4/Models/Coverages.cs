﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class Coverages
    {
        public Coverages()
        {
            CoverageLineItems = new HashSet<CoverageLineItems>();
        }

        public int Id { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public DateTime? DateOfCreated { get; set; }
        public string CreatedBy { get; set; }
        public int? PolicyId { get; set; }

        public virtual ICollection<CoverageLineItems> CoverageLineItems { get; set; }
    }
}

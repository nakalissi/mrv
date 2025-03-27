using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("leads")]
public class Lead
{
    [Key]
    [Column("id")]
    public int? Id { get; set; }

    [Column("contact_first_name")]
    public string? ContactFirstName { get; set; }

    [Column("contact_full_name")]
    public string? ContactFullName { get; set; }

    [Column("contact_phone")]
    public string? ContactPhone { get; set; }

    [Column("contact_email")]
    public string? ContactEmail { get; set; }

    [Column("date_created")]
    public DateTime? DateCreated { get; set; }

    [Column("suburb")]
    public string? Suburb { get; set; }

    [Column("category")]
    public string? Category { get; set; }

    [Column("description")]
    public string? Description { get; set; }

    [Column("price")]
    public decimal? Price { get; set; }

    [Column("status")]
    public string? Status { get; set; } // "new", "accepted", "declined"
}

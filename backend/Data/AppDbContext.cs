using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public DbSet<Lead> Leads { get; set; }
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}

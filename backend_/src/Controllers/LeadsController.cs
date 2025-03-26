using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class LeadsController : ControllerBase
{
    private readonly AppDbContext _context;
    
    public LeadsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("invited")]
    public async Task<IActionResult> GetInvitedLeads()
    {
        var leads = await _context.Leads.Where(l => l.Status == "new").ToListAsync();
        return Ok(leads);
    }

    [HttpGet("accepted")]
    public async Task<IActionResult> GetAcceptedLeads()
    {
        var leads = await _context.Leads.Where(l => l.Status == "accepted").ToListAsync();
        return Ok(leads);
    }

    [HttpPost("{id}/accept")]
    public async Task<IActionResult> AcceptLead(int id)
    {
        var lead = await _context.Leads.FindAsync(id);
        if (lead == null) return NotFound();

        lead.Status = "accepted";
        if (lead.Price > 500) lead.Price *= 0.9m;

        await _context.SaveChangesAsync();
        return Ok(lead);
    }

    [HttpPost("{id}/decline")]
    public async Task<IActionResult> DeclineLead(int id)
    {
        var lead = await _context.Leads.FindAsync(id);
        if (lead == null) return NotFound();

        lead.Status = "declined";
        await _context.SaveChangesAsync();
        return Ok(lead);
    }
}

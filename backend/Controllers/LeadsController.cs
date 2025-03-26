using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

[Route("api/[controller]")]
[ApiController]
public class LeadsController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly ILogger<LeadsController> _logger;

    // Constructor injection for AppDbContext and ILogger
    public LeadsController(AppDbContext context, ILogger<LeadsController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet("invited")]
    public async Task<IActionResult> GetInvitedLeads()
    {
        var leads = await _context.Leads.Where(l => l.Status == "new").ToListAsync();
        _logger.LogInformation("Fetched invited leads: {Count} leads found.", leads.Count);

        return Ok(leads);
    }

    [HttpGet("accepted")]
    public async Task<IActionResult> GetAcceptedLeads()
    {
        var leads = await _context.Leads.Where(l => l.Status == "accepted").ToListAsync();
        _logger.LogInformation("Fetched accepted leads: {Count} leads found.", leads.Count);

        return Ok(leads);
    }

    [HttpPost("{id}/accept")]
    public async Task<IActionResult> AcceptLead(int id)
    {
        var lead = await _context.Leads.FindAsync(id);
        if (lead == null)
        {
            _logger.LogWarning("Lead with ID {Id} not found.", id);
            return NotFound();
        }

        lead.Status = "accepted";
        if (lead.Price > 500)
        {
            lead.Price *= 0.9m;
            _logger.LogInformation("Applied discount to lead with ID {Id}. New price: {Price}.", id, lead.Price);
        }

        await _context.SaveChangesAsync();
        _logger.LogInformation("Lead with ID {Id} accepted.", id);
        return Ok(lead);
    }

    [HttpPost("{id}/decline")]
    public async Task<IActionResult> DeclineLead(int id)
    {
        var lead = await _context.Leads.FindAsync(id);
        if (lead == null)
        {
            _logger.LogWarning("Lead with ID {Id} not found.", id);
            return NotFound();
        }

        lead.Status = "declined";
        await _context.SaveChangesAsync();
        _logger.LogInformation("Lead with ID {Id} declined.", id);
        return Ok(lead);
    }
}
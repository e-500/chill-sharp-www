using ChillSharp.Api;
using Microsoft.EntityFrameworkCore;

public class Program
{
    var builder = WebApplication.CreateBuilder(args);

    // Fell free to init any type of db-context
    builder.Services.AddDbContext<AppDbContext>(options =>
        options.UseSqlite("Data Source=app.db"));

    // This line do the magic!
    builder.Services.AddChillApi<AppDbContext>();

    var app = builder.Build();
    app.MapChillApi(); // Remember to add also this ;-)
    app.Run();
}

[ChillEntity]
public class Blog : ChillEntity
{
    [Key]
    public override Guid Guid { get; set; }

    [ChillProperty]
    public string Title { get; set; } = string.Empty;

    [ChillProperty]
    public string Url { get; set; } = string.Empty;

    [ChillProperty]
    public ICollection<Post>? Posts { get; set; } = null;
}




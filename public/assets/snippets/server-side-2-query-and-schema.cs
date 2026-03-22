//
// The Blog entity
//
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

//
// The BlogQuery
//
[ChillEntity]
public class BlogQuery : ChillQuery
{
    [ChillProperty]
    public string Title { get; set; } = string.Empty;

    public override IQueryable<IChillEntity> OnQuery(IChillContext Context)
    {
        var ctx = (DummyContext)Context;
        var q = ctx.Blog.AsQueryable();

        // Query by title
        if (string.IsNullOrEmpty(Title))
            q = q.Where(x => x.Title.Contains(Title));
        // Query by guid
        if (Guid.HasValue)
            q = q.Where(x => x.Guid == Guid.Value);

        return q;
    }
}

//
// Execute the query using the C# client lib
//
public static void Main()
{
    // Query the created entity to verify persistence.
    var q = new ChillDtoQuery();
    // Set the query object selector
    q.ChillType = "Query.BlogQuery";
    // I want all blog talking of recipes
    q.Properties.Add("Title", "recipe");
    // I want only title and url
    q.ResultProperties = ChillDtoProperty.Build(["Guid", "Title", "Url"]);
    // Get the results
    var results = cli.Query(q);
}
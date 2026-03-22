//
// The Blog entity
//
[ChillEntity(
    UniquePropertyKeyString: "C0D5C2FB-418C-4E5E-9462-CF2284C02403", 
    PrimaryLanguageLabel: "Blog", 
    SecondaryLanguageLabel: "Blog")]
public class Blog : ChillEntity
{
    [Key]
    public override Guid Guid { get; set; }

    [ChillProperty(
        UniquePropertyKeyString: "AF85D5B7-576F-4F38-A7DC-2C4FC317AFC7",
        PrimaryLanguageLabel: "Blog title",
        SecondaryLanguageLabel: "Titolo del blog",
        MinLength: 3)] // string length must be at least 3 characters
    public string Title { get; set; } = string.Empty;

    [ChillProperty(
        UniquePropertyKeyString: "D3FB9BC9-B5FB-495F-AD50-64899E950D80",
        PrimaryLanguageLabel: "Blog url",
        SecondaryLanguageLabel: "Url del blog",
        RegexPattern = "^https?:\\/\\/(?:www\\.)?[a-zA-Z0-9\\-._~%]+(?:\\:[0-9]+)?(?:\\/[^\\s]*)?$")] // string must be a valid URL
    public string Url { get; set; } = string.Empty;

    [ChillProperty(
        UniquePropertyKeyString: "9501DEFE-7504-45E4-884B-D2BAB3BE9701",
        PrimaryLanguageLabel: "Blog posts",
        SecondaryLanguageLabel: "Post del blog")]
    public ICollection<Post>? Posts { get; set; } = null;
}

//
// The BlogQuery
//
[ChillEntity(
    UniquePropertyKeyString: "3FA098F5-4929-4DD7-B951-DA641A3DFEED",
    PrimaryLanguageLabel: "Blog query",
    SecondaryLanguageLabel: "Ricerca Blog")]
public class BlogQuery : ChillQuery
{
    [ChillProperty(
        UniquePropertyKeyString: "AF868D2D-360A-485C-904D-DAFD7A830A8A",
        PrimaryLanguageLabel: "Blog title",
        SecondaryLanguageLabel: "Titolo del blog")]
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
// Get schema using the C# client lib
//
public static void Main()
{
    // Query the created entity to verify persistence.
    var itCultureClient = new ChillSharpClient("http://localhost:5000/api/chill", CultureName: "it-IT");
    var defaultCultureClient = new ChillSharpClient("http://localhost:5000/api/chill");
    // Get it culture blog schema
    var itCultureBlogSchema = itCultureClient.GetSchema("Model.Blog", "default");
    // Get default culture blog schema
    var itCultureBlogSchema = defaultCultureClient.GetSchema("Model.Blog", "default");
}

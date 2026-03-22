using ChillSharp.Auth.Contracts;
using ChillSharp.Auth.Model;
using ChillSharp.Client;

var client = new ChillSharpClient("http://localhost:5000/api/chill");

var publicSchema = client.GetSchema("Model.Post", "public");
var editorSchema = client.GetSchema("Model.Post", "editor");

var canSeeInternalNotes = client.EvaluateAuthPropertyPermission(
    new EvaluatePropertyPermissionRequest
    {
        UserGuid = currentUserGuid,
        Action = PermissionAction.See,
        Module = "Blog",
        EntityName = "Post",
        PropertyName = "InternalNotes"
    });

if (canSeeInternalNotes.IsAllowed)
{
    Render(editorSchema);
}
else
{
    Render(publicSchema);
}

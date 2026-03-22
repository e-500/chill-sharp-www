using ChillSharp.Auth.Contracts;
using ChillSharp.Auth.Model;
using ChillSharp.Client;

var rootClient = new ChillSharpClient("http://localhost:5000/api/chill");

var editors = rootClient.CreateAuthRole(new CreateAuthRoleRequest
{
    Name = "Editors",
    Description = "Can edit content without touching sensitive fields"
});

rootClient.CreateAuthPermissionRule(new CreateAuthPermissionRuleRequest
{
    RoleGuid = editors.Guid,
    Effect = PermissionEffect.Allow,
    Action = PermissionAction.Update,
    Scope = PermissionScope.Entity,
    Module = "Blog",
    EntityName = "Post"
});

rootClient.CreateAuthPermissionRule(new CreateAuthPermissionRuleRequest
{
    RoleGuid = editors.Guid,
    Effect = PermissionEffect.Deny,
    Action = PermissionAction.Modify,
    Scope = PermissionScope.Property,
    Module = "Blog",
    EntityName = "Post",
    PropertyName = "InternalNotes"
});

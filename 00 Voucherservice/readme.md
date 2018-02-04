## Start VoucherService

Go to console where *.csproj is located and run: 

`dotnet restore` and then  
`dotnet run`

Requires [.NET Core SDK v2.1.4](https://www.microsoft.com/net/download/thank-you/dotnet-sdk-2.1.4-windows-x64-installer) and SQL Standard or Enterprise to be installed locally. If you want to use another version change connection string in appsettings.json. Don't forget to create SQL Login "angular" with pwd "angular" as Sysadmin.
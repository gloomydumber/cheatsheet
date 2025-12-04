export default function MCPShields() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <a
        style={{ minWidth: "200px" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/noditlabs/nodit-mcp-server"
      >
        <img
          style={{ width: "100%" }}
          src="https://img.shields.io/badge/GitHub-noditlabs%2Fnodit--mcp--server-000?logo=github&style=for-the-badge"
          alt="GitHub Repo"
        />
      </a>

      <a
        style={{ minWidth: "200px" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.npmjs.com/package/@noditlabs/nodit-mcp-server"
      >
        <img
          style={{ width: "100%" }}
          src="https://img.shields.io/badge/NPM-@noditlabs%2Fnodit--mcp--server-red?logo=npm&style=for-the-badge"
          alt="NPM Package"
        />
      </a>
    </div>
  );
}

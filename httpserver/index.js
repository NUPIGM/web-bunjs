import { Database } from "bun:sqlite";

const api = {
  auth: {
    async login(arg) {
      return {
        arg,
        token: "jwt token",
      };
    },
    async logout(arg) {
      return {
        arg,
        data: "data",
      };
    },
    async register(arg) {
      return {
        arg,
        token: "jwt token",
      };
    },
  },
  vod: {
    async get(query) {
      //数据库查询
      const db = new Database("./db/mydb.sqlite");
      let conditions = [];
      let values = [];
      let whereClause = "";
      let data = [];
      if (query.get("act") === "list") {
        if (query.get("type")) {
          conditions.push("type = ?");
          values.push(query.get("type"));
        }
        if (query.get("name")) {
          conditions.push("name = ?");
          values.push(query.get("name"));
        }
        whereClause =
          conditions.length > 0 ? "WHERE " + conditions.join(" AND ") : "";
        data = db.query(`SELECT * FROM users ${whereClause}`).all(values);
      } else if (query.get("act") === "detail") {
        // 可以根据需要添加其他条件
      }

      db.close();
      return {
        query,
        data,
      };
    },
    async delete(arg) {
      return {
        arg,
        data: "data",
      };
    },
    async update(arg) {
      return {
        arg,
        data: "data",
      };
    },
    async add(arg) {
      return {
        arg,
        data: "data",
      };
    },
  },
};

Bun.serve({
  port: Bun.env.BUN_PORT, // 默认为$BUN_PORT、$PORT、$NODE_PORT，否则为3000
  hostname: Bun.env.BUN_HOST,
  production: true, // 生产环境下自动压缩响应体，默认为false
  /**
   * TLS配置
   *
  tls: {
    key: Bun.file(Bun.env.KEY_PATH), // TLS密钥的路径
    cert: Bun.file(Bun.env.CERT_PATH), // TLS证书的路径
    ca: Bun.file(Bun.env.CA_PATH), // 根CA证书的路径
  },
   */
  async fetch(req) {
    const url = new URL(req.url);
    const [, path, method] = url.pathname.slice(1).split("/");
    if (req.method === "POST") {
      let bodyargsy = await req.json();
      let result = await api[path][method](bodyargsy);
      return Response.json(result, {
        headers: {},
      });
    } else if (req.method === "GET") {
      let querargsy = url.searchParams;
      let result = await api[path][method](querargsy);
      return Response.json(result, {
        headers: {},
      });
    } else {
      return Response.json({ error: "err.message" }, { status: 500 });
    }
  },
});

import { Database } from "bun:sqlite";

// 初始化 SQLite 数据库
const db = new Database("./db/mydb.sqlite");
db.run("DROP TABLE IF EXISTS users")
db.run(
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT,type TEXT)"
);
db.run("INSERT INTO users (name, email,type) VALUES (?,?,?)", "nupigm", "nupigm@gmail.com","admin");
db.run("INSERT INTO users (name, email,type) VALUES (?,?,?)", "nupigm2", "nupigm2@gmail.com","user");
db.run("INSERT INTO users (name, email,type) VALUES (?,?,?)", "nupigm3", "nupigm3@gmail.com","user");     



// 创建一个名为 'users' 的表，包含 'id', 'name', 和 'email' 字段
//删除表
// db.run(`DROP TABLE IF EXISTS videos`);
// db.run(`CREATE TABLE IF NOT EXISTS videos (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   vod_id INTEGER,
//   vod_name TEXT,
//   vod_en TEXT,
//   vod_actor TEXT,
//   vod_director TEXT,
//   vod_writer TEXT,
//   vod_blurb TEXT,
//   vod_content TEXT,
//   vod_year TEXT,
//   vod_duration TEXT,
//   vod_lang TEXT,
//   vod_area TEXT,
//   vod_state TEXT,
//   type_id INTEGER,
//   type_name TEXT,
//   vod_class TEXT,
//   vod_tag TEXT,
//   vod_time TEXT,
//   vod_remarks TEXT,
//   vod_play_from TEXT,
//   vod_pic TEXT,
//   category_id INTEGER,
//   comments INTEGER,
//   description TEXT,
//   dislikes INTEGER,
//   duration INTEGER,
//   likes INTEGER,
//   url TEXT,
//   views INTEGER,
//   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//   updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
// )`);
// 更改数据
// db.query("INSERT INTO videos (vod_id,vod_name) values (?,?) ").run(
//   12,
//   "测试视频"
// );
// db.run("UPDATE videos SET vod_name = ?, updated_at = ? WHERE id = ?", ["测试视频2", new Date().toISOString(), 1]);

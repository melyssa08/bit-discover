import express from "express";
import bodyParser from "body-parser";
import DatabaseTable from "./models/database/databaseTable.js";
import getConfig from "./configs/loader.js";
import ConsoleUtils from "./utils/console.js";
import cors from "cors";
import colors from "colors";

const DBPATH = "tests.db";

const EXPRESS_CONFIG = await getConfig("express");

ConsoleUtils.addTimeOnConsole();
DatabaseTable.initDatabase();

const app = express();

app.use(express.static("../Frontend/"));

app.disable("x-powered-by");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

class Jobs extends DatabaseTable {
  constructor() {
    /*
			name: 'id',
			type: 'INTEGER',
			primaryKey: true,
			autoIncrement: true,
			notNull: true,
			foreign: {
				key: "key_tabela_atual"
				table: "outra_tabela"
				column: "coluna_outra_tabela"
			}
		*/
    let columns = [
      {
        name: "id",
        type: "INTEGER",
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
      },
      {
        name: "name",
        type: "TEXT",
        notNull: true,
      },
      {
        name: "company_name",
        type: "TEXT",
        notNull: true,
      },
      {
        name: "company_local",
        type: "TEXT",
        notNull: true,
      },
      {
        name: "activities",
        type: "TEXT",
        notNull: true,
      },
      {
        name: "required",
        type: "TEXT",
        notNull: true,
      },
      {
        name: "company_description",
        type: "TEXT",
        notNull: true,
      },
      {
        name: "type",
        type: "TEXT",
        notNull: true,
      },
      {
        name: "education_level",
        type: "TEXT",
        notNull: true,
      },
      {
        name: "job_time",
        type: "NUMBER",
        notNull: true,
      },
      {
        name: "salary_min",
        type: "REAL",
        notNull: true,
      },
      {
        name: "salary_max",
        type: "REAL",
        notNull: true,
      },
    ];

    super("jobs", columns);
  }
}

const jobs = new Jobs();

app.get("/jobs", (req, res) => {
  jobs.filter({}).then((result) => {
    res.send(result);
  });
});

app.get("/jobs/:id", (req, res) => {
  jobs.filter({ id: req.params.id }).then((result) => {
    res.send(result);
  });
});

app.post("/jobs/", (req, res) => {
  jobs.save(req.body).then((result) => {
    res.send(result);
  });
});

app.put("/jobs/:id", (req, res) => {
  jobs.update(req.body, { id: req.params.id }).then((result) => {
    res.send(result);
  });
});

app.delete("/jobs/:id", (req, res) => {
  jobs.delete({ id: req.params.id }).then((result) => {
    res.send(result);
  });
});

app.listen(EXPRESS_CONFIG.port, EXPRESS_CONFIG.hostname, () => {
  console.log(
    `Server running at http://${EXPRESS_CONFIG.hostname}:${EXPRESS_CONFIG.port}/`
      .rainbow
  );
});

app.get("/jobs", (req, res) => {
  res.statusCode = 200;
  var db = new sqlite3.Database(DBPATH);
  var sql = "SELECT * FROM tests";
  db.all(sql, (err, row) => {
    if (err) {
      throw err;
    }
    console.log(row);
    res.send(row);
  });
});

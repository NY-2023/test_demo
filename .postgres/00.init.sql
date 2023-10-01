CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS report_metric, report, metric;

CREATE TABLE metric (
  id uuid DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id)
);

CREATE TABLE report (
  id uuid DEFAULT uuid_generate_v4 (),
  name TEXT NOT NULL,
  description TEXT,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id)
);

CREATE TABLE answer (
  id uuid DEFAULT uuid_generate_v4 (),
  value TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  report_id uuid NOT NULL,
  metric_id uuid NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (report_id) REFERENCES report (id),
  FOREIGN KEY (metric_id) REFERENCES metric (id)
);

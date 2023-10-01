INSERT INTO report (id, name, description) VALUES
  ('8349ce65-b080-4179-9d8b-35cb76c4c7c0', 'ACME Inventions LTD', '2020-2021 report'),
  ('727c85eb-70f0-4874-bd92-d03b48487ae5', 'Jupiter Mining Corporation', '2022-Q1 report');

INSERT INTO answer (value, report_id, metric_id) VALUES
  ('12345.6789', '8349ce65-b080-4179-9d8b-35cb76c4c7c0','dbf63a67-b027-4cff-babc-566588a199b4'),
  ('98765.4321', '8349ce65-b080-4179-9d8b-35cb76c4c7c0','c075c759-2051-45fd-abe0-1858fcd0af94'),
  ('0', '8349ce65-b080-4179-9d8b-35cb76c4c7c0','6e609012-5df4-426a-a3ad-f06e77632402'),
  ('false', '8349ce65-b080-4179-9d8b-35cb76c4c7c0','b6b65917-e52c-4e50-aa42-32ceb579eeeb'),
  ('12345.6789', '727c85eb-70f0-4874-bd92-d03b48487ae5','dbf63a67-b027-4cff-babc-566588a199b4'),
  ('98765.4321', '727c85eb-70f0-4874-bd92-d03b48487ae5','c075c759-2051-45fd-abe0-1858fcd0af94'),
  ('0', '727c85eb-70f0-4874-bd92-d03b48487ae5','6e609012-5df4-426a-a3ad-f06e77632402'),
  ('false', '727c85eb-70f0-4874-bd92-d03b48487ae5','b6b65917-e52c-4e50-aa42-32ceb579eeeb');
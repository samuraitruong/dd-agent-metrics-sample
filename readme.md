## Setup

.env file

```sh
DD_API_KEY=[your dd key]
```

## Start

```sh

docker-compose up

```

## View metrics

https://app.datadoghq.com/metric/explorer?exp_metric=test.app.hello%2Ctest.app.started%2Ctest.app.latency%2Ctest.app.gauge%2Ctest.app.histogram.count&from_ts=1645100910004&to_ts=1645101210004&live=true&tile_size=m&exp_agg=sum&exp_row_type=metric

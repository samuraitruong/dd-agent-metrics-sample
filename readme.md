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

https://app.datadoghq.com/metric/explorer?exp_metric=test.app.started%2Ctest.app.latency%2Ctest.app.gauge%2Ctest.app.histogram.count%2Ctest.app.count%2Ctest.app.request&from_ts=1645101377273&to_ts=1645101677273&live=true&tile_size=m&exp_agg=sum&exp_row_type=metric

## Trigger

```
watch -n1 -x curl http://localhost:3000
```

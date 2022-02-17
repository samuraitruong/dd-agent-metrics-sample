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

<img width="1620" alt="image" src="https://user-images.githubusercontent.com/1183138/154484434-6d8c8a59-8138-4e05-ae01-65657487ab4c.png">


## Trigger

```
watch -n1 -x curl http://localhost:3000
```

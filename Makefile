#   __  __       _         __ _ _
#  |  \/  |     | |       / _(_) |
#  | \  / | __ _| | _____| |_ _| | ___
#  | |\/| |/ _` | |/ / _ \  _| | |/ _ \
#  | |  | | (_| |   <  __/ | | | |  __/
#  |_|  |_|\__,_|_|\_\___|_| |_|_|\___|

.PHONY: all

all:
	echo hey

#  __   __
# |  \ |_  \  /
# |__/ |__  \/
#

.PHONY: stop
stop: stop-mongo stop-grafana stop-prometheus

.PHONY: start-mongo
start-mongo: stop-mongo
	docker-compose -f 2-mongo/docker-compose.yml up -d

.PHONY: stop-mongo
stop-mongo:
	docker-compose -f 2-mongo/docker-compose.yml rm -s -f

.PHONY: start-grafana
start-grafana: stop-grafana
	docker-compose -f 3-grafana/docker-compose.yml up -d

.PHONY: stop-grafana
stop-grafana:
	docker-compose -f 3-grafana/docker-compose.yml rm -s -f

.PHONY: start-prometheus
start-prometheus: stop-prometheus
	docker-compose -f 4-prometheus/docker-compose.yml up -d

.PHONY: stop-prometheus
stop-prometheus:
	docker-compose -f 4-prometheus/docker-compose.yml rm -s -f

.PHONY: start-redis
start-redis: stop-redis
	docker-compose -f 5-redis/docker-compose.yml up -d

.PHONY: stop-redis
stop-redis:
	docker-compose -f 5-redis/docker-compose.yml rm -s -f

.PHONY: start-redis-grafana
start-redis-grafana: stop-redis-grafana
	docker-compose -f 6-redis-grafana/docker-compose.yml up -d

.PHONY: stop-rediss-grafana
stop-redis-grafana:
	docker-compose -f 6-redis-grafana/docker-compose.yml rm -s -f

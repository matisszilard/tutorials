#   __  __       _         __ _ _
#  |  \/  |     | |       / _(_) |
#  | \  / | __ _| | _____| |_ _| | ___
#  | |\/| |/ _` | |/ / _ \  _| | |/ _ \
#  | |  | | (_| |   <  __/ | | | |  __/
#  |_|  |_|\__,_|_|\_\___|_| |_|_|\___|

.PHONY: all

all:
	echo hey

#      _            _                                                        
#   __| | ___   ___| | _____ _ __    ___ ___  _ __ ___  _ __   ___  ___  ___ 
#  / _` |/ _ \ / __| |/ / _ \ '__|  / __/ _ \| '_ ` _ \| '_ \ / _ \/ __|/ _ \
# | (_| | (_) | (__|   <  __/ |    | (_| (_) | | | | | | |_) | (_) \__ \  __/
#  \__,_|\___/ \___|_|\_\___|_|     \___\___/|_| |_| |_| .__/ \___/|___/\___|
#                                                      |_|                   

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

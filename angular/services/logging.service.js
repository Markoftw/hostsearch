export class LoggingService{
    constructor($log){
        'ngInject';

        this.$log = $log;
    }

    log(message) {
        if (!message) {
            return false;
        }
        return this.$log.log(message);
    }
    info(message) {
        if (!message) {
            return false;
        }
        return this.$log.info(message);
    }
    warn(message) {
        if (!message) {
            return false;
        }
        return this.$log.warn(message);
    }
    error(message) {
        if (!message) {
            return false;
        }
        return this.$log.error(message);
    }
    debug(message) {
        if (!message) {
            return false;
        }
        return this.$log.debug(message);
    }

}


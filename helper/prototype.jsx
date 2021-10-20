if (typeof (window) !== 'undefined') {
    Object.defineProperty(String.prototype, 'isEmail', {
        value: function () {
            const email = this;
            let re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        configurable: true,
        writable: true
    });

    Object.defineProperty(String.prototype, 'capFirst', {
        value: function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        },
        configurable: true,
        writable: true
    });

    Object.defineProperty(Object.prototype, 'isEmpty', {
        value: function () {
            return Object.keys(this).length === 0
        },
        configurable: true,
        writable: true
    });

    Object.defineProperty(Array.prototype, 'remove', {
        value: function (value) {
            let index = this.indexOf(value);
            this.splice(index, 1);
            return this
        },
        configurable: true,
        writable: true
    });

    Object.defineProperty(Object.prototype, 'Get', {
        value: function (key, def = undefined) {
            return this[key] || def
        },
        configurable: true,
        writable: true
    });

    Object.defineProperty(Number.prototype, 'MoneyFormat', {
        value: function (n, x) {
            try {
                const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
                return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
            } catch (e) {
                return ''
            }
        },
        configurable: true,
        writable: true
    });

    Object.defineProperty(String.prototype, 'trunc', {
        value: function (n) {
            return this.length > n ? this.substr(0, n - 1) + '...' : this;
        },
        configurable: true,
        writable: true
    });

    Object.defineProperty(Number.prototype, 'formatSecond', {
        value: function (has_type = false) {
            try {
                let sec_num = this
                // let sec_num = parseInt(this, 10)
                let hours = Math.floor(sec_num / 3600)
                let minutes = Math.floor(sec_num / 60) % 60
                let seconds = (sec_num % 60).toFixed(0)
                let type = 's'
                if (minutes > 0) {
                    type = 'm'
                }
                if (hours > 0) {
                    type = 'h'
                }

                return [hours, minutes, seconds]
                    .map(v => v < 10 ? '0' + v : v)
                    .filter((v, i) => v !== '00' || i > 0)
                    .join(':') + `${has_type ? type : ''}`
            } catch (e) {
                return ''
            }
        },
        configurable: true,
        writable: true
    });
}

picker = new Pikaday({
                    dates: dates,
                    onSelect: function (date) {
                        var time = moment(date);
                        //window.location.href += time.format('/YYYY/MM/YYYY-MM-DD') + '.html';
                        // a bug of pikaday whose fix is still not released
                        window.location.hash = time.format('/YYYY-MM-DD');
                    },
                    i18n: {
                        previousMonth: '&lt;&lt;',
                        nextMonth: '&gt;&gt;',
                        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                    },
                    minDate: options.firstDate,
                    maxDate: options.lastDate
                });

element.appendChild(picker.el);

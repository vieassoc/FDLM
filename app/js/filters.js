var appFilters = angular.module('appFilters', ['ngResource']);

appFilters.filter("isConcerned", function(){
	return function(events, date1) {
  		var filtered_list = [];
  		var date = new Date(date1);
  		var date_begin = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0, 0);
  		var date_end = new Date(date_begin);
  		date_end.setDate(date_begin.getDate()+1);
		for (var i = 0; i < events.length; i++) {
		  	var date2 = new Date(events[i].date_start);
		    if (date_begin <= date2 && date2 <= date_end) {
		      filtered_list.push(events[i]);
		    }
		}

		filtered_list.sort(function(a, b) {
    		a = new Date(a.date_start);
    		b = new Date(b.date_start);
    		return a>b ? 1 : a<b ? -1 : 0;
		});
		return filtered_list;
	}
});
appFilters.filter("isFreshNews", function(){
    return function(newsList, date1) {
        var filtered_list = [];
        var minimalDate = new Date(date1);
        angular.forEach(newsList, function (news) {
            var newsDateCreation = new Date(news.updated_at);
            if (minimalDate <= newsDateCreation) {
                filtered_list.push(news);
            }
        });

        filtered_list.sort(function(a, b) {
            a = new Date(a.updated_at);
            b = new Date(b.updated_at);
            return a<b ? 1 : a>b ? -1 : 0;
        });
        return filtered_list;
    }
});
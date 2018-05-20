var cdAnalytics = new clickdimensions.Analytics('analytics-eu.clickdimensions.com');
cdAnalytics.setAccountKey('ajqUTs85dnkSHLrM2UlOgV');
cdAnalytics.setDomain('kunnat.net');
cdAnalytics.setScore(typeof(cdScore) == "undefined" ? 0 : (cdScore == 0 ? null : cdScore));
cdAnalytics.trackPage();
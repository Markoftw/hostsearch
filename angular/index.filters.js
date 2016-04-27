import {StartFromFilter} from './filters/startFrom.filter';
import {CapitalizeFilter} from './filters/capitalize.filter';
import {HumanReadableFilter} from './filters/human_readable.filter';
import {TruncatCharactersFilter} from './filters/truncate_characters.filter';
import {TruncateWordsFilter} from './filters/truncate_words.filter';
import {TrustHtmlFilter} from './filters/trust_html.filter';
import {ChkLocFilter} from './filters/chkLoc.filter';
import {ChkRamFilter} from './filters/chkRam.filter';
import {ChkPlatformFilter} from './filters/chkPlatform.filter';
import {ChkHddFilter} from './filters/chkHdd.filter';
import {UcFirstFilter} from './filters/ucfirst.filter';
import {MoreThanFilter} from './filters/moreThan.filter';

angular.module('app.filters')
	.filter('startFrom', StartFromFilter)
	.filter('capitalize', CapitalizeFilter)
	.filter('humanReadable', HumanReadableFilter)
	.filter('truncateCharacters', TruncatCharactersFilter)
	.filter('truncateWords', TruncateWordsFilter)
	.filter('trustHtml', TrustHtmlFilter)
	.filter('chkLoc', ChkLocFilter)
	.filter('chkRam', ChkRamFilter)
	.filter('chkPlatform', ChkPlatformFilter)
	.filter('chkHdd', ChkHddFilter)
	.filter('moreThan', MoreThanFilter)
	.filter('ucfirst', UcFirstFilter);
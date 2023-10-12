(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("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");
	this.shape.setTransform(768.6502,147.5151);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1537.3,295), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#336633").ss(1,1,1).p("EBM5gumQECKKBGKjQBfObkEPIUgIyAgpgdeAQ3Qp5FpqQCwQ0XFf13l5Qw+kjswqBQr/pZoQuPQkMnNipnZQijnPhGnaQiMu2DyvlQAShKAUhKQDxuDHnrIEgv2AJGQC8CEFACqQKEFUM0ENQM0ELPAhgQPDhfN+pcIgfA7QgpBJg6BOQi2D9kLDOQl4EinoCeQpjDGr1gUQpMgOo6kJQnJjTmplrQkwkDkBk0QiBibhEhng");
	this.shape.setTransform(527.4673,1150.0616);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("EgDrAlLQpMgOo6kJQnJjTmplrQkwkDkBk0QiBibhEhnQC8CEFACqQKEFUM0ENQM0ELPAhgQPDhfN+pcIgfA7QgpBJg6BOQi2D9kLDOQl4EinoCeQosC0qlAAQhDAAhEgCgEA8ggDXQiiirgwgwQgmgogmghQhPhKhHg1Qi4iIj0hjQk9h/lYgmQlXgmlSA4QlRA4k4CTQk5CSkDDgQgWASgPAHQgWALgSgFQgjgMgIg/QgYi1Aki3QAli1BcieQAohDBBhXQA1hGA7hHQCei9CPhrQDMicElhfQBqgiBpgWQEFg3EIAPQGGAYE8CwQC4BnCjChQD/D5DJGAIA6BzQBWCzAsCQQA4C0ACCgQADA7ggAMQgHACgGAAQgZAAghgjgAmdnOQijisgvgwQh7h6hphOQi3iIj1hiQk8iBlYgmQlYgllRA3QlRA5k5CTQk5CTkDDfQgVATgPAHQgXALgSgFQgigMgIhAQgZi1Ali3QAki1BdieQAohDBAhXQA2hGA6hGQCei9CPhtQDMibElhfQFvh1FxAUQGHAYE7CxQICEhFbLTQBVCzAtCPQA4C1ADCgQACA7gfAMQgHACgGAAQgaAAgfgig");
	this.shape_1.setTransform(524.5841,1138.1854);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().p("EgVLBMyQw+kjswqBQr/pZoQuPQkMnNipnaQijnOhGnbQiMu1DyvlQAShLAUhJQDxuEHnrHQFOgmFXhyQHfifHMkpQGXkFGcl/QFOkzGMm6QgDGaA5HtIAFAqQArFoBlJAQBiIsBeEyQCPHSDsE6QAaAiAWAQQAfAXAfgFQAYgDAWgWQAPgOAUgeQG9qwBtuSQA/oHgzokQgelDhFlOIBeBeIAfA1IAHgSQGIF6FcEvQCiCMCXB7QKcIfKBFsQEZCgFNCcQECB6EjB4QFkCTKZD2QECKKBGKiQBfObkEPIUgIyAgqgdeAQ2Qp5FqqQCwQp0CpqLAAQq6AArVjDgEgsxAcwQEBE0EwEDQGpFrHJDUQI6EJJMAOQL1ATJjjFQHoifF4kiQELjOC2j8QA6hOAphKIAfg6Qt+JbvDBgQvABfs0kLQs0kMqElUQlAiri8iDQBEBnCBCagEAkOgCZQFYAnE9B+QD0BiC4CIQBHA2BPBJQAmAiAmAnQAwAwCiCsQAqAsAdgMQAggMgDg6QgCihg4i0QgsiPhWizIg6hyQjJmBj/j4Qijihi4hnQk8ixmGgYQkIgPkFA3QhpAWhqAiQklBfjMCcQiPBsieC9Qg7BHg1BGQhBBXgoBCQhcCfglCzQgkC3AYC1QAIBAAjALQASAGAWgLQAPgHAWgTQEDjfE5iSQE4iTFRg4QDKghDLAAQCKAACKAPgA+wmRQFYAmE8CAQD1BiC3CIQBpBOB7B6QAvAvCjCsQAoAsAegMQAfgLgCg8QgDifg4i1QgtiOhVizQlbrUoCkgQk7iymHgXQlxgVlvB2QklBejMCcQiPBtieC8Qg6BHg2BFQhABYgoBCQhdCfgkC1QglC2AZC1QAIA/AiAMQASAFAXgKQAPgHAVgTQEDjfE5iSQE5iTFRg5QDJghDMAAQCKAACKAPg");
	this.shape_2.setTransform(527.4673,1050.0366);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#336633").s().p("EgaTBF5QgWgRgZgiQjsk5iPnTQhfkxhhotQhlo/gslpIgEgpQg6nuAEmZQmNG5lNEzQmdF/mWEGQnNEonfCgQlXBylOAlQiuATisgBQghgBgTgDQgcgGgTgPQgnghAOg/QAKgyAlg5QEsnDFBmuQElmLDkj7QEvlPEwjfQCdh0CkhYQhnAEhygNQh3gOiSgjQhagWisgwIkOhMQisgxhXgeQiPgyhog9QgpgVgVgcQgdgiAKgjQAFgWAWgSQAPgNAbgQQDAhrFVinQDShmBvgsQDOhPDZgiQFDgwGIAwQD/AfH6AxIAaADIAAgJQARjyA2kaQB9qEEEotQEXpVGenBQFal5GqkBQBxhDB2g6QJOknJngZQKCgZJKEVQJZEdFZIEQE6iDF5gCQFXgCFrBoQH/CTGpE6QGsE7EIGvIALASQETHFA+ITQBAIeiwHnQizHwmVFoQmbFtn+BjQATgpAiguIA+hSQE0mHCzmUQDKnDAgm7QAlnfitm3Qi2nNlokSQiRhujGheQhCgghVgkQhigoh5gvQkOhlixghQh9gXhvACQh0ABhmAcQBmFFiJFlQiCFQkcDmQiDBriLBAQiYBIiYATQikAUiagsQiigwhwhrQiNiFgtjNQgtjFA1jFQAxi1B8ipQBwiXCliCQCJhtDBhrQA3geBXgtQBYgtB7g8QmQlEoEh8QoDh9n3BrQhpAWhkAgQmBB4lNEBQmlFEjoHLQhnDMhJD1Qg+DVgtEDQh4K5BQKBQACAdAFAdQBShMBnhGQCehqD0hxQEEh4DUhDQJbi/KKBYQKJBZIUFaQA4AmgFAiQgCASgQAPQgKALgVAMIk3C2QjrCJhlA3QmRDemfCtIgFACQCvA0DMBGQG1CXFJCWQGSC2E8DXQLAHdIAMPQHXLQEDOAQAhBvgvAoQgaAYgsgEQgggDgsgPInDilIi8hFQqaj1lkiTQkih4kDh6QlNickYigQqCltqboeQiXh8ihiMQldkumIl7IgGATIgfg2IhehdQBEFNAeFDQAzIlg+IHQhuORm9KwQgUAegQAPQgVAVgZAEIgLABQgZAAgagTgEAmmgqRQhlA1hNBWQhOBVgqBoQgJAXAHAKQAGALAXACQByALBFgOQBmgVA4hBQAUgXASgkQBIiLgHieQh3Aqg2Adg");
	this.shape_3.setTransform(659.0396,449.1623);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,0,1274.6,1561.9), null);


(lib.Ghost = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmWeNQiqg5hbAGQgqACg9ARIhmAbQiBAdhNgtQhYg1ggiiQgpjKAakGQAOiKA8lHQA4k0AdjhQAlkhAEj3QAChzgGhVQgIhsgXhZIgXhRQgMgwgEgiQgFgzAKg8QAHgsAShAQBTkhCLinQBQhgCQhtQBxhWBeg0QB2hBBvgaQCfglCrAjQCkAiCSBcQDEB8B/DMQB/DNAXDnQAJBYgECAQgHCRgCBIQgEECA2E4QAlDTBYFdQA1DXATBbQAjCrAGCKQAICngfCSQgjCihSB9QhWCEhrAaQhMATh8gnQiagxgxgDQhLgFhWAeQg5AUhhAyQhsA4gvASQhWAjhKADIgJABQhXAAimg5gAoocXQAyALBeAfQBhAgAvALQBQASBBgHQBVgIB6hBQCdhTAtgPQBKgaBQgDQBPgDBMAUQAYAGA5AUQAzARAeAHQBjAXBBgmQAagPAYgbQASgVAUgiQBfiYAgikQAbiOgSiwQgNh8gsjBQhqmzgtjaQhNl4ABkeQABhbAHi4QADiigShvQgljXiGi2QiGi2jChjQhjgyhngXQhtgZhoAJQiaANirBXQj/CDiqDoQiwDvgeETQANAMAGAUQAEAOADAYQARCOAHBRQAMB7AEBkQAME6g8GkQgjD0hWHmQgTB5gJBKQgMBsABBYQAACBAZCAQAIAsALAbQAPAmAYAXQAhAfA1AIQAuAHA1gLQAZgGBFgVQA7gSAkgFQAWgDAZAAQAuAAA0ALgAg5EsQgcgOgVgXQgWgXgLgcQgIgVgGgiQgQhPgFgxQgGhGgOhcQgGgWAFgWQAJgkAmgnQAXgYAsgkQAugmAcgMQAegMAjACQAjADAdARQAmAXAkA5QBCBnAZB1QAJApgCAcQgBAZgOAuQgPAzgOAXIgPAVIgPAVIgTAeQgLAOgdATQg6AmgpAJQgWAGgUAAQgoAAglgUgAm0l0QghgQgfgsQghgugTg1QgRgugRhiQgWh7gGhBQgLhpAIhUQADglAUgHIAOgDQAJgBAFgCQAKgFAJgXQAVg2AkgdQAUgRAYgHQAagIAYAEQAdAEAqAcQAtAdAbAVQAlAeAXAfQAXAfARAsQALAbAQA3QAPAzAEAaQALBHgcBpQgsCrhXBZQgpAqgpAPQgaAJgYAAQgaAAgXgKgAGDn5QgjgJgfgdQgRgRgNgTQgNgSgPghIgRglQgPgjgRgxQgjhkgDhNIgBgkQgBgVgCgOIgFggQgEgUACgNQABgIAFgQQAFgQABgJQABgNgEgcQgBgXALgLQAHgHASgIQAJgGAJgPIARgXQAUgVAugEQAngCAjAJQAmALAcAXQAVARAbAjQAuA6ARAfQAWAmARAvQAgBZAEBWQAFBfgeBQQgeBOg2AqQgfAXgkAIQgSAFgRAAQgTAAgTgGg");
	this.shape.setTransform(-70.9273,-7.3434);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkJduQgugKhighQhegfgxgKQhQgRhCAJQgkAEg6ATQhFAVgaAFQg1ALgtgGQg1gIghggQgYgXgPglQgLgcgJgsQgZiAAAiAQAAhZAMhrQAIhKATh5QBXnnAjj0QA8mkgMk6QgEhkgMh7QgIhRgRiNQgDgZgEgNQgGgVgMgMQAekTCvjvQCqjoEAiCQCrhYCagNQBngIBtAYQBnAXBjAyQDDBkCGC2QCGC2AkDXQATBugDCjQgIC3AABcQgBEdBNF4QAsDbBrGzQAsDBANB8QASCvgcCOQgfCkhfCZQgVAhgSAVQgXAcgbAPQhAAlhkgXQgegHgzgRQg5gTgXgHQhMgUhQADQhPADhLAaQgtAQidBTQh5BAhVAJQgSACgSAAQgzAAg7gOgAgHlnQgcALgvAnQgrAkgYAYQgmAngIAjQgGAXAHAWQAOBcAGBGQAEAwAQBPQAHAjAIAUQALAdAVAXQAWAXAbAOQA5AdA+gPQApgKA7gmQAdgTALgNIASgeIAPgVIAPgVQAPgYAOgzQAOguABgZQACgbgJgpQgZh2hBhnQglg4glgXQgdgSgjgCIgMAAQgcAAgZAKgAm+zTQgYAIgVAQQgkAegVA1QgJAXgKAFQgEACgJABIgOADQgUAHgDAmQgJBUALBpQAHBAAWB8QARBiAQAtQAUA1AgAvQAgAsAhAPQAtAVA1gUQAqgPApgqQBXhYAsisQAbhogKhHQgEgbgPgzQgRg2gKgbQgSgtgWgeQgXgggmgeQgagVgtgcQgrgcgcgFIgRgBQgQAAgRAFgAE2z1QguAEgUAVIgRAXQgKAPgJAGQgRAIgHAGQgMALABAYQAEAbgBANQgBAJgEAQQgFARgBAIQgCANADATIAGAhQACAOAAAVIABAjQADBOAjBkQARAwAQAkIARAlQAPAhAMASQANASASARQAfAdAjAKQAjAKAmgJQAkgJAegXQA3gpAdhPQAehQgFheQgEhWgghaQgRgvgVglQgSgfgug6QgbgkgVgRQgcgXglgKQgcgIgeAAIgQABg");
	this.shape_1.setTransform(-70.87,-7.5982);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkJduQgugKhighQhegfgxgKQhQgRhCAJQgkAEg6ATQhFAVgaAFQg1ALgtgGQg1gIghggQgYgXgPglQgLgcgJgsQgZiAAAiAQAAhZAMhrQAIhKATh5QBXnnAjj0QA8mkgMk6QgEhkgMh7QgIhRgRiNQgDgZgEgNQgGgVgMgMQAekTCvjvQCqjoEAiCQCrhYCagNQBngIBtAYQBnAXBjAyQDDBkCGC2QCGC2AkDXQATBugDCjQgIC3AABcQgBEdBNF4QAsDbBrGzQAsDBANB8QASCvgcCOQgfCkhfCZQgVAhgSAVQgXAcgbAPQhAAlhkgXQgegHgzgRQg5gTgXgHQhMgUhQADQhPADhLAaQgtAQidBTQh5BAhVAJQgSACgSAAQgzAAg7gOgAgHlnQgcALgvAnQgrAkgYAYQgmAngIAjQgGAXAHAWQAOBcAGBGQAEAwAQBPQAHAjAIAUQALAdAVAXQAWAXAbAOQA5AdA+gPQApgKA7gmQAdgTALgNIASgeIAPgVIAPgVQAPgYAOgzQAOguABgZQACgbgJgpQgZh2hBhnQglg4glgXQgdgSgjgCIgMAAQgcAAgZAKgAm+zTQgYAIgVAQQgkAegVA1QgJAXgKAFQgEACgJABIgOADQgUAHgDAmQgJBUALBpQAHBAAWB8QARBiAQAtQAUA1AgAvQAgAsAhAPQAtAVA1gUQAqgPApgqQBXhYAsisQAbhogKhHQgEgbgPgzQgRg2gKgbQgSgtgWgeQgXgggmgeQgagVgtgcQgrgcgcgFIgRgBQgQAAgRAFgAE2z1QguAEgUAVIgRAXQgKAPgJAGQgRAIgHAGQgMALABAYQAEAbgBANQgBAJgEAQQgFARgBAIQgCANADATIAGAhQACAOAAAVIABAjQADBOAjBkQARAwAQAkIARAlQAPAhAMASQANASASARQAfAdAjAKQAjAKAmgJQAkgJAegXQA3gpAdhPQAehQgFheQgEhWgghaQgRgvgVglQgSgfgug6QgbgkgVgRQgcgXglgKQgcgIgeAAIgQABgAmEsEQgegMgTggQgOgYgIgoQgThdAWhLQAGgWALgIQALgJANADIANACIALgDQAZgLAUANQAIAFAKAPQAWAfAIASQAEALAEAPQAUBVgeBRQgKAcgOAMQgNALgRACIgKABQgNAAgLgEgAF0tnQgSgGgNgPQgUgVgMguQgGgXgDgXIgCgaQgCgPgCgKIgGgZQgCgQAHgJIAKgIQAGgFADgEQACgDADgLQAIgWARgKQAMgHAPAAQAOAAANAGQAXALARAcQAQAZAIAjQAGAXABAbQAAAcgGAlQgEAhgKATQgOAbgZAIQgIACgHAAQgLAAgKgEg");
	this.shape_2.setTransform(-70.87,-7.5982);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AmWeNQiqg5hbAGQgqACg9ARIhmAbQiBAdhNgtQhYg1ggiiQgpjKAakGQAOiKA8lHQA4k0AdjhQAlkhAEj3QAChzgGhVQgIhsgXhZIgXhRQgMgwgEgiQgFgzAKg8QAHgsAShAQBTkhCLinQBQhgCQhtQBxhWBeg0QB2hBBvgaQCfglCrAjQCkAiCSBcQDEB8B/DMQB/DNAXDnQAJBYgECAQgHCRgCBIQgEECA2E4QAlDTBYFdQA1DXATBbQAjCrAGCKQAICngfCSQgjCihSB9QhWCEhrAaQhMATh8gnQiagxgxgDQhLgFhWAeQg5AUhhAyQhsA4gvASQhWAjhKADIgJABQhXAAimg5gAoocXQAyALBeAfQBhAgAvALQBQASBBgHQBVgIB6hBQCdhTAtgPQBKgaBQgDQBPgDBMAUQAYAGA5AUQAzARAeAHQBjAXBBgmQAagPAYgbQASgVAUgiQBfiYAgikQAbiOgSiwQgNh8gsjBQhqmzgtjaQhNl4ABkeQABhbAHi4QADiigShvQgljXiGi2QiGi2jChjQhjgyhngXQhtgZhoAJQiaANirBXQj/CDiqDoQiwDvgeETQANAMAGAUQAEAOADAYQARCOAHBRQAMB7AEBkQAME6g8GkQgjD0hWHmQgTB5gJBKQgMBsABBYQAACBAZCAQAIAsALAbQAPAmAYAXQAhAfA1AIQAuAHA1gLQAZgGBFgVQA7gSAkgFQAWgDAZAAQAuAAA0ALgAg5EsQgcgOgVgXQgWgXgLgcQgIgVgGgiQgQhPgFgxQgGhGgOhcQgGgWAFgWQAJgkAmgnQAXgYAsgkQAugmAcgMQAegMAjACQAjADAdARQAmAXAkA5QBCBnAZB1QAJApgCAcQgBAZgOAuQgPAzgOAXIgPAVIgPAVIgTAeQgLAOgdATQg6AmgpAJQgWAGgUAAQgoAAglgUgAm0l0QghgQgfgsQghgugTg1QgRgugRhiQgWh7gGhBQgLhpAIhUQADglAUgHIAOgDQAJgBAFgCQAKgFAJgXQAVg2AkgdQAUgRAYgHQAagIAYAEQAdAEAqAcQAtAdAbAVQAlAeAXAfQAXAfARAsQALAbAQA3QAPAzAEAaQALBHgcBpQgsCrhXBZQgpAqgpAPQgaAJgYAAQgaAAgXgKgAm2w5QgMAJgFAVQgWBMATBdQAIAoANAXQATAhAfALQAQAGARgCQASgDAMgKQAOgMALgcQAdhSgUhUQgDgQgFgLQgHgRgWgfQgKgQgJgFQgUgNgZALIgKAEIgOgDIgFAAQgKAAgIAGgAGDn5QgjgJgfgdQgRgRgNgTQgNgSgPghIgRglQgPgjgRgxQgjhkgDhNIgBgkQgBgVgCgOIgFggQgEgUACgNQABgIAFgQQAFgQABgJQABgNgEgcQgBgXALgLQAHgHASgIQAJgGAJgPIARgXQAUgVAugEQAngCAjAJQAmALAcAXQAVARAbAjQAuA6ARAfQAWAmARAvQAgBZAEBWQAFBfgeBQQgeBOg2AqQgfAXgkAIQgSAFgRAAQgTAAgTgGgAFXyUQgSALgHAWQgEALgCADQgCADgHAFIgJAJQgIAIACAQIAGAZQADAKABAQIACAZQADAYAGAXQANAtATAWQAOAOARAHQATAHASgGQAZgIANgbQAKgSAFghQAGgmgBgcQgBgagFgYQgIgigQgaQgSgbgWgLQgNgGgPgBQgPAAgLAHg");
	this.shape_3.setTransform(-70.9273,-7.3434);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgE4AghQg3gLhzgkQhvgig6gLQhegThNAKQgrAFhFAUQhRAXgeAGQg/AMg1gHQg/gIgmgjQgdgZgRgpQgNgegKgwQgeiMAAiNQAAhhAOh1QAKhRAWiFQBmoUApkLQBHnLgOlYQgFhtgOiHQgJhYgUibQgDgbgFgPQgHgWgPgNQAjktDPkGQDIj+EtiOQDKhgC1gOQB6gKCBAbQB5AZB1A3QDlBtCeDHQCeDHArDrQAVB5gDCyQgJDJAABkQgCE4BbGcQA0DvB+HcQA0DTAPCHQAVDAggCcQglCzhwCnQgYAlgVAXQgcAegfAQQhMAph2gZQgjgIg8gSQhDgWgcgHQhZgWheAEQheADhXAcQg1ARi5BbQiQBHhkAJQgUACgVAAQg8AAhGgPgAgJmJQghANg3AqQgzAngcAbQgsAqgKAnQgHAZAIAYQAQBkAHBNQAGA1ASBXQAIAlAKAXQANAfAZAZQAZAZAhAQQBDAfBJgQQAwgKBFgqQAigVANgPIAWggQAFgIANgPQAMgPAFgIQARgaASg4QAQgyABgcQADgegLgtQgdiAhOhxQgrg+gsgZQgigTgpgDIgNAAQgiAAgeALgAoO1HQgcAJgZASQgqAggZA7QgKAZgMAFQgFACgLABIgQAEQgYAHgEApQgKBcANBzQAIBHAaCHQAUBrATAyQAXA6AnAzQAlAwAnARQA1AWA/gVQAxgRAwgtQBmhhA0i8QAhhygNhOQgEgdgSg4QgUg7gMgeQgVgxgaghQgbgigsghQgggXg1gfQgygfghgFQgKgBgKAAQgTAAgUAFgAFt1sQg3AEgXAXIgUAZQgLARgLAGQgVAJgIAHQgNAMABAaQAFAegCAOQgBAKgFARIgHAbQgCAPAEAVIAGAjQACAQABAXIABAnQAEBUApBuQAUA1ASAnIAUAoQASAkAPAUQAPAUAVATQAkAfApALQAqALAsgKQArgJAkgaQBAgtAjhWQAjhXgGhoQgFheglhiQgUgzgagpQgUgig2hAQgggmgZgTQghgZgsgMQgggIgjAAIgUABgAnJtNQgkgMgXgkQgPgZgKgsQgWhmAahSQAGgYAOgJQANgKAOADIAQADIANgEQAdgMAYAOQAKAGALARQAaAiAJATQAGAMAEARQAXBcgjBZQgMAfgQANQgPAMgVACIgMABQgOAAgNgFgAG2u4QgVgHgQgQQgXgYgOgyQgIgZgDgZIgCgcQgCgRgDgLIgHgcQgDgRAJgJIALgKQAIgFADgEIAHgPQAIgYAVgMQAOgIARAAQARABAQAHQAaAMAVAeQATAcAJAlQAGAaACAdQAAAfgHApQgFAkgMAUQgQAegdAIQgJADgKAAQgMAAgMgEg");
	this.shape_4.setTransform(-70.8887,-7.6579);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("EgHeAhDQjIg/hrAHQgzAChHATIh5AdQiYAghagxQhog6gmixQgvjeAekeQAQiXBHllQBClRAij3QAsk8AEkPQADh9gHhdQgKh2gbhiIgahYQgPg0gEgmQgGg3ALhCQAJgwAVhHQBik8Cji2QBehqCqh2QCGheBug5QCKhHCEgdQC7goDJAmQDBAlCtBkQDnCICVDgQCWDfAbD9QALBggFCNQgICfgDBOQgEEbBAFVQArDmBnF/QA/DqAWBkQApC7AICXQAJC3glCfQgpCyhgCIQhmCRh+AdQhZAUiSgrQi1g1g6gDQhYgGhmAhQhDAWhzA3Qh/A9g3AUQhmAmhXADIgLABQhnAAjCg+gAqKfCQA6ALBvAiQBzAkA2ALQBeAUBOgHQBkgJCQhHQC4hbA2gRQBXgcBegDQBdgEBaAWQAcAHBDAWQA8ASAjAIQB2AZBMgpQAfgQAcgeQAUgXAZglQBwinAlizQAgicgVjAQgPiHg0jTQh+ncg0jvQhbmcABk4QABhkAIjJQAEiygWh5QgqjriejHQiejHjlhtQh1g3h5gZQiBgbh6AKQi1AOjKBgQktCOjID+QjPEGgjEtQAOANAIAWQAFAPADAbQAUCbAJBYQAOCHAFBtQAOFYhHHLQgpELhmIUQgWCFgLBRQgOB1ABBhQAACNAeCMQAKAwANAeQARApAdAZQAmAjA/AIQA1AHA/gMQAegGBRgXQBFgUArgFQAbgDAdAAQA1AAA+AMgAhDFJQghgQgZgZQgZgZgNgfQgKgXgIglQgShXgGg1QgHhNgQhkQgIgYAHgZQAKgnAsgqQAcgbAzgnQA3gqAhgNQAkgNApACQApADAiATQAsAZArA+QBOBxAdCAQALAtgDAeQgBAcgQAyQgSA4gRAaQgFAIgMAPQgNAPgFAIIgWAgQgNAPgiAVQhFAqgwAKQgaAGgZAAQguAAgrgVgAoBmXQgogRgkgwQgngzgXg6QgTgygVhrQgZiHgIhHQgNhzAKhcQAEgpAXgHIARgEQALgBAFgCQAMgFAKgZQAZg7AqggQAZgSAcgJQAegIAdAEQAhAFAyAfQA1AfAgAXQAsAhAbAiQAaAhAVAxQAMAeAUA7QASA4AEAdQANBOghByQg0C8hmBhQgwAtgxARQgfAKgdAAQgdAAgbgLgAoEyeQgOAJgHAYQgZBSAWBmQAJAsAQAZQAXAkAjAMQAUAHAUgDQAVgCAPgMQAQgNAMgfQAjhZgXhcQgEgRgGgMQgJgTgagiQgLgRgKgGQgYgOgdAMIgNAEIgQgDIgHAAQgLAAgJAHgAHIooQgpgLgkgfQgVgTgPgUQgPgUgSgkIgUgoQgSgngUg1QgphugEhUIgBgnQgBgXgCgQIgGgjQgEgVACgPIAHgbQAFgRABgKQACgOgFgeQgBgaANgMQAIgHAVgJQALgGALgRIAUgZQAXgXA3gEQAtgDApAKQAtAMAhAZQAZATAgAmQA2BAAUAiQAaApAUAzQAlBiAFBeQAGBogjBXQgjBWhAAtQglAagqAJQgVAFgVAAQgWAAgWgGgAGU0CQgVAMgIAYIgHAPQgDAEgIAFIgLAKQgJAJADARIAHAcQADALACARIABAcQAEAZAIAZQAOAyAXAYQAQAQAVAHQAWAHAVgGQAdgIAQgeQAMgUAFgkQAHgpAAgfQgCgdgHgaQgIglgTgcQgVgegagMQgQgHgRgBQgRAAgOAIg");
	this.shape_5.setTransform(-70.9503,-7.3857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.1,-225,288.4,435.3);


(lib.happyhalloween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(376.6,-33.3,1,1,0,0,0,768.6,147.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:768.7,rotation:-0.3416,x:376.75,y:-33.25},0).wait(1).to({rotation:-0.6831,x:376.7},0).wait(1).to({rotation:-1.0247},0).wait(1).to({rotation:-1.3663,x:376.75},0).wait(1).to({rotation:-1.7078,x:376.7},0).wait(1).to({rotation:-2.0494,y:-33.3},0).wait(1).to({rotation:-2.391},0).wait(1).to({rotation:-2.7325,y:-33.25},0).wait(1).to({rotation:-3.0741},0).wait(1).to({rotation:-3.4157,x:376.75},0).wait(1).to({rotation:-3.7572,x:376.7},0).wait(1).to({rotation:-4.0988,x:376.75,y:-33.3},0).wait(1).to({rotation:-4.4404,x:376.7,y:-33.25},0).wait(1).to({rotation:-4.7819,y:-33.3},0).wait(1).to({rotation:-5.1235},0).wait(1).to({rotation:-5.4651,y:-33.25},0).wait(1).to({rotation:-5.8066},0).wait(1).to({rotation:-6.1482,x:376.75},0).wait(1).to({rotation:-6.4897,x:376.7,y:-33.3},0).wait(1).to({rotation:-5.9036},0).wait(1).to({rotation:-5.3175},0).wait(1).to({rotation:-4.7314,y:-33.25},0).wait(1).to({rotation:-4.1453,y:-33.3},0).wait(1).to({rotation:-3.5591,y:-33.25},0).wait(1).to({rotation:-2.973},0).wait(1).to({rotation:-2.3869,x:376.75,y:-33.3},0).wait(1).to({rotation:-1.8008,x:376.7,y:-33.25},0).wait(1).to({rotation:-1.2146,y:-33.3},0).wait(1).to({rotation:-0.6285,y:-33.25},0).wait(1).to({rotation:-0.0424},0).wait(1).to({rotation:0.5437},0).wait(1).to({rotation:1.1299,x:376.75,y:-33.3},0).wait(1).to({rotation:1.716},0).wait(1).to({rotation:2.3021},0).wait(1).to({rotation:2.8882,x:376.7,y:-33.25},0).wait(1).to({rotation:3.4744,x:376.75},0).wait(1).to({rotation:4.0605,x:376.7,y:-33.3},0).wait(1).to({rotation:4.6466},0).wait(1).to({rotation:5.2327,x:376.75,y:-33.25},0).wait(1).to({rotation:4.7095,y:-33.3},0).wait(1).to({rotation:4.1862},0).wait(1).to({rotation:3.6629},0).wait(1).to({rotation:3.1396,x:376.7,y:-33.25},0).wait(1).to({rotation:2.6164},0).wait(1).to({rotation:2.0931,x:376.75,y:-33.3},0).wait(1).to({rotation:1.5698,x:376.7},0).wait(1).to({rotation:1.0465,y:-33.25},0).wait(1).to({rotation:0.5233,y:-33.3},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-398.1,-239.4,1553.4,421.70000000000005);


(lib.glowingpumpkin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// front
	this.instance = new lib.Symbol1();
	this.instance.setTransform(405.65,362.45,1,1,0,0,0,521.9,1498.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:636.5,regY:780.7,rotation:-0.6014,x:512.7,y:-356.85},0).wait(1).to({rotation:-1.2028,x:505.2,y:-358},0).wait(1).to({rotation:-1.8042,x:497.65,y:-359},0).wait(1).to({rotation:-2.4056,x:490,y:-359.9},0).wait(1).to({rotation:-3.007,x:482.4,y:-360.8},0).wait(1).to({rotation:-3.6084,x:474.9,y:-361.5},0).wait(1).to({rotation:-4.2098,x:467.25,y:-362.15},0).wait(1).to({rotation:-4.8113,x:459.6,y:-362.8},0).wait(1).to({rotation:-5.4127,x:452,y:-363.35},0).wait(1).to({rotation:-6.0141,x:444.4,y:-363.8},0).wait(1).to({rotation:-6.6155,x:436.75,y:-364.2},0).wait(1).to({rotation:-7.2169,x:429.1,y:-364.45},0).wait(1).to({rotation:-7.8183,x:421.55,y:-364.6},0).wait(1).to({rotation:-8.4197,x:413.9,y:-364.75},0).wait(1).to({rotation:-9.0211,x:406.2,y:-364.8},0).wait(1).to({rotation:-9.6225,x:398.65},0).wait(1).to({rotation:-10.2239,x:390.95,y:-364.65},0).wait(1).to({rotation:-10.8253,x:383.3,y:-364.5},0).wait(1).to({rotation:-11.4267,x:375.7,y:-364.2},0).wait(1).to({rotation:-12.0281,x:368.1,y:-363.85},0).wait(1).to({rotation:-12.6295,x:360.5,y:-363.4},0).wait(1).to({rotation:-13.231,x:352.9,y:-362.9},0).wait(1).to({rotation:-13.8324,x:345.25,y:-362.3},0).wait(1).to({rotation:-14.4338,x:337.65,y:-361.65},0).wait(1).to({rotation:-15.0352,x:330,y:-360.9},0).wait(1).to({rotation:-15.6366,x:322.45,y:-360.05},0).wait(1).to({rotation:-16.238,x:314.85,y:-359.15},0).wait(1).to({rotation:-16.8394,x:307.3,y:-358.2},0).wait(1).to({rotation:-17.4408,x:299.8,y:-357.05},0).wait(1).to({rotation:-16.2901,x:314.25,y:-359.05},0).wait(1).to({rotation:-15.1393,x:328.75,y:-360.7},0).wait(1).to({rotation:-13.9886,x:343.25,y:-362.15},0).wait(1).to({rotation:-12.8379,x:357.85,y:-363.2},0).wait(1).to({rotation:-11.6871,x:372.45,y:-364.1},0).wait(1).to({rotation:-10.5364,x:387,y:-364.65},0).wait(1).to({rotation:-9.3857,x:401.6,y:-364.8},0).wait(1).to({rotation:-8.2349,x:416.2,y:-364.7},0).wait(1).to({rotation:-7.0842,x:430.85,y:-364.35},0).wait(1).to({rotation:-5.9335,x:445.45,y:-363.75},0).wait(1).to({rotation:-4.7827,x:460,y:-362.8},0).wait(1).to({rotation:-3.632,x:474.5,y:-361.5},0).wait(1).to({rotation:-2.4813,x:489.05,y:-360.05},0).wait(1).to({rotation:-1.3305,x:503.55,y:-358.15},0).wait(1).to({rotation:-0.1798,x:518,y:-356.1},0).wait(1).to({rotation:0.9709,x:532.45,y:-353.65},0).wait(1).to({rotation:2.1217,x:546.75,y:-351},0).wait(1).to({rotation:3.2724,x:561.1,y:-348},0).wait(1).to({rotation:4.4231,x:575.25,y:-344.75},0).wait(1).to({rotation:5.5739,x:589.45,y:-341.2},0).wait(1).to({rotation:6.7246,x:603.55,y:-337.3},0).wait(1).to({rotation:7.8753,x:617.55,y:-333.25},0).wait(1).to({rotation:9.0261,x:631.5,y:-328.85},0).wait(1).to({rotation:10.1768,x:645.3,y:-324.2},0).wait(1).to({rotation:11.3275,x:659.05,y:-319.25},0).wait(1).to({rotation:12.4783,x:672.65,y:-313.95},0).wait(1).to({rotation:13.629,x:686.2,y:-308.5},0).wait(1).to({rotation:14.7797,x:699.65,y:-302.75},0).wait(1).to({rotation:15.9305,x:712.95,y:-296.7},0).wait(1).to({rotation:17.0812,x:726.1,y:-290.4},0).wait(1).to({rotation:16.4852,x:719.3,y:-293.7},0).wait(1).to({rotation:15.8891,x:712.45,y:-296.95},0).wait(1).to({rotation:15.2931,x:705.6,y:-300.05},0).wait(1).to({rotation:14.6971,x:698.65,y:-303.15},0).wait(1).to({rotation:14.101,x:691.7,y:-306.2},0).wait(1).to({rotation:13.505,x:684.8,y:-309.1},0).wait(1).to({rotation:12.909,x:677.75,y:-312},0).wait(1).to({rotation:12.3129,x:670.7,y:-314.75},0).wait(1).to({rotation:11.7169,x:663.7,y:-317.45},0).wait(1).to({rotation:11.1209,x:656.6,y:-320.15},0).wait(1).to({rotation:10.5248,x:649.5,y:-322.75},0).wait(1).to({rotation:9.9288,x:642.35,y:-325.2},0).wait(1).to({rotation:9.3328,x:635.15,y:-327.65},0).wait(1).to({rotation:8.7367,x:627.95,y:-329.95},0).wait(1).to({rotation:8.1407,x:620.8,y:-332.2},0).wait(1).to({rotation:7.5447,x:613.55,y:-334.45},0).wait(1).to({rotation:6.9487,x:606.25,y:-336.6},0).wait(1).to({rotation:6.3526,x:598.95,y:-338.65},0).wait(1).to({rotation:5.7566,x:591.7,y:-340.6},0).wait(1).to({rotation:5.1606,x:584.35,y:-342.5},0).wait(1).to({rotation:4.5645,x:577.05,y:-344.35},0).wait(1).to({rotation:3.9685,x:569.7,y:-346.1},0).wait(1).to({rotation:3.3725,x:562.35,y:-347.75},0).wait(1).to({rotation:2.7764,x:554.95,y:-349.3},0).wait(1).to({rotation:2.1804,x:547.55,y:-350.85},0).wait(1).to({rotation:1.5844,x:540.1,y:-352.3},0).wait(1).to({rotation:0.9883,x:532.65,y:-353.65},0).wait(1).to({rotation:0.3923,x:525.2,y:-354.9},0).wait(1).to({rotation:-0.2037,x:517.75,y:-356.1},0).wait(1).to({rotation:-0.7998,x:510.25,y:-357.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.1,-1153.4,1790,1601.6000000000001);


// stage content:
(lib.NewHaiku_Halloween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {haiku:0,artwork:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.Frame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
		console.log("will go to frame 2");
			root.gotoAndStop(1);
		}
			
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1");
			root.line01_txt.text = line01;
		}
		
		
		var line01 = "Here Lies a Pumpkin";
		
		var root = this;
		stage.enableMouseOver();
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		function changeLine02(){
			console.log("will change line 2");
			root.line02_txt.text = line02;
		}
		
		
		var line02 = "It Must Be Spooky Season";
		
		
		var root = this;
		stage.enableMouseOver();
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine03(){
			console.log("will change line 3");
			root.line03_txt.text = line03;
		}
		
		
		var line03 = "Happy Halloween";
	}
	this.frame_1 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.Frame01_btn.addEventListener("click",toFrame01);
		
		function toFrame01(){
		console.log("will go to frame 1");
			root.gotoAndStop(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// pumpkin
	this.halloween_mc = new lib.happyhalloween();
	this.halloween_mc.name = "halloween_mc";
	this.halloween_mc.setTransform(493.2,131.5,0.4969,0.5329,0,0,0,376.6,-33.3);

	this.instance = new lib.glowingpumpkin();
	this.instance.setTransform(510.35,443.3,0.2018,0.2018,-2.9611,0,0,521.4,-354.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.halloween_mc}]},1).wait(1));

	// ghost
	this.Frame02_btn = new lib.Ghost();
	this.Frame02_btn.name = "Frame02_btn";
	this.Frame02_btn.setTransform(888.25,495.25,0.6284,0.6284,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.Frame02_btn, 0, 1, 2, false, new lib.Ghost(), 3);

	this.Frame01_btn = new lib.Ghost();
	this.Frame01_btn.name = "Frame01_btn";
	this.Frame01_btn.setTransform(886.85,494.4,0.6681,0.6681);
	new cjs.ButtonHelper(this.Frame01_btn, 0, 1, 2, false, new lib.Ghost(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Frame02_btn}]}).to({state:[{t:this.Frame01_btn}]},1).wait(1));

	// text
	this.line03_txt = new cjs.Text("Line Three", "55px 'Segoe Script'", "#FFFFFF");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 89;
	this.line03_txt.lineWidth = 368;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(458.55,469.3);

	this.line02_txt = new cjs.Text("Line Two", "55px 'Segoe Script'", "#FFFFFF");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 89;
	this.line02_txt.lineWidth = 586;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(461.4,276.4);

	this.line01_txt = new cjs.Text("Line One", "55px 'Segoe Script'", "#FFFFFF");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 89;
	this.line01_txt.lineWidth = 841;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(461.45,101.7);

	this.text = new cjs.Text("Halloween Haiku", "46px 'Segoe Script'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.lineWidth = 583;
	this.text.parent = this;
	this.text.setTransform(463.3,12.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt}]}).to({state:[]},1).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9933").ss(1,1,1).p("EhP4g2hMCfxAAAMAAABtDMifxAAAg");
	this.shape.setTransform(472.175,321.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EhP4A2iMAAAhtDMCfxAAAMAAABtDg");
	this.shape_1.setTransform(472.175,321.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(439.9,291.7,544.6,380.00000000000006);
// library properties:
lib.properties = {
	id: '0A47B1F87F6A834F87EB871A168DDCF0',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0A47B1F87F6A834F87EB871A168DDCF0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
///<reference path="runeapps/runeappslib.js"/>
"use strict";
import _ from "./runeapps/runeappslib.js";

//old non-glitched version
//ImageData.fromBase64(function (i) { SheatheReader.toolbeltEoc = i; }, "iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAIAAABL1vtsAAACfklEQVQ4T7WQ72tSURzGby+aXs1V89fVe733+nN6vaZO73QqapM5N1ewtiIYjq3GWguHBKsx1qgIIka9ii16UYwg6E0RFP17Pcd7OEnsRQjBh+OXcz7Pc86VG7noslzyDA3iHH5ynV51Y3cIEEScs4wJ4vSSVGkPAYKI/58KsTwvTrX8xWafmT5kxiaOpAo4q8JfnDXxTc7Eau2DN8cfv/08/f6L8eHrj72j40h1HgKTaYXVLYlTs56JOiFbc6crvedH+6/ebu8929o9pDx6Cm7f613rbEKAZvoIIk4qPu2kvuzXTF4f3t95eQL7bkN6sSy8uyOerPmwgvebwdNu5vNugckI0opulTtYcJh0958sdLZnb6zMx7n1yT/7Z/K4ZacVG0WOsfbgYfPmeml6blHnVnKkBavJoMagFaZRCRHwhGS+2L61urS6xWhdXzQbB6mHiU8rcAxCTs5p5yrt5YieyVebRn3OqLWwYkbphJ84g2CH487RCnw2aBgy0MokoAaDmocD8LCiHYOpMSBjpRV4EiNqlGMZAw9BpizT14JBZxBakU4phYxsgopwri7F04mwYMTcejYJ8plIKSszmKzpQVphUxIWj2xxiSPA6VOLLTmVB2I0iS5zAN6IflnVIECDjAiCtOJCNGsLjPOBGC9Frf6wkMio5QU5d/UvUO2KXoEADTIiCJIKXlAdWoFXNV7R7KEUHxi3imGLV+m/yH/e6QMYyM1eBUc2NUk0RUOEBAWVVIzqJVsoRQnqvJLoF0UQwJ0EDGIEmziCwGQEaYUjbrBdAqRgkryr/zTzQoDNwTxAkFTgY0azjbEcAQOb/wXI9O/kBQVlQ6FY3dJv5agN0SHwWMgAAAAASUVORK5CYII=");
//ImageData.fromBase64(function (i) { SheatheReader.toolbeltLegacy = i }, "iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAIAAABL1vtsAAADAklEQVQ4T22U2U8TQRzH12fiE1FByvYEetJtt9tje20P2i49oPQQqBzlECwWFYNHEaLGhOCR+NAE44sSEhOf1ETjv+d3MpthNSSfnf7mN9/vNzPbTjm7zWKzEMyjBlpQrCYeHQqd6juo0aReDs/b3gLjzX7l1V6N0FUPdqbBs60iLQBd0utJBCLRPbjf3Nuc6bSyl7K58A/o7LazsMAIO8ePDCMeC+uNFIXW7bk4qxk0ggEjTkR2gVQYGCuzsaWK3CpHFksXYHq7IrdrylpdYYkwkoMgBrbl2RilVZbnq5l3/f6XH7/Pfv5hfP7+6/hDv1FKQsDEMGrvAvGNQrCeD9Zy0kzGf3h80jvpd56+3N4/0nj8AsxvPVjZ2KhOBSCDGBYYtYjzXc+3XpLy/uju7vEp1OsZw+v60Me1kdPVYYzg0x3zWVf4uh9iYhjJu0BMN8E9L12ldHuHpaVOfq41befawYv+pTwpDGgRG2GOsbqzl2u05bRadXMtkaRgpOhlDPKlIoYqYhYCtuAKhIvN5dryNqNQqdJEPYqV6EkEHiwDyyA3OMDFinWbWwgkcpKiSskCRtQI9d8kGj3ocNwVLQLHBhmJB84oMZjMZud1DkCHEekoqIwBMUYtAltijEnRcUHCRuCJ8tpugV6jR4vweowhgacgwioqBrvXYR2Sxq+5fS4QEGyyj2cwsdNtxv0gEXGB9zuMXrvB5zBNTvDOuMp7AmBkzIUsWoAbNvfouBsCyCCGRfYatTuSk8fSIYci2adktxJ0JGOSK1U2iileB6aIjkb8EGQjE+mwHRYYtYh6ylFWhJmst5Lx4geej3nigYngpFV0mf1OE0ARmrQmAnYslRQfZGUFCDBq76Jd8tSmRNBQxfliuJ6XKmm/mvDCkIsSUGCKJpbqhSBkVA8j/rhIxE7VtVb2LxZJBC7iQjFyazqMW0TvHr1RAE1tSRUhhgVG7Zo9ang6DfFhUwM1uNcM/wftMxn8MJKD4FvBB94KQCRAgQ7tU1DTKS3YlChHDX8BzIdlCg4op30AAAAASUVORK5CYII=");

//new glitched images (sligtly scaled and misaligned)
ImageData.fromBase64(function (i) { SheatheReader.toolbeltEoc = i; }, "iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAIAAABL1vtsAAAC4ElEQVQ4T52R20/aYBiHP82GFAQRT9AW2lIoh36lnA8tMOQ8dEMOxsTD4jwAczfuYlt2SJap0WRXS3az/bd7CwTEeGFInoT37fv7PWko0i2tLljWZwbqCH6iR5e5s48zAEWoowWrjSq06czWDEAR6o8p1Dql8ZJSBsCg1uHhVGbAo4o6la66MzW59DpcaUQGwAArr1bhBIFxH5goyHzTnigBtljBo1Z6X65+/v57NeHft19/drsf2MQmmaoMk/ZEmUxVRwr9KrVTCraqEeBVTTnsv+9/vTk/anx+k7nt52572bt3L2C46uYv9pRWJTRMNgp4I1aEF9Gv0Zri+7bpbs8O/OiVTi8/NY76jbSjq+qudizXzQGt5Zv2yu3uxjAGXLdWl8N5q7I9UnTTqK/OA+fNePv4Ir/V2Yqs7EfQWXr+OKlxktKu9+kp81OKgyjqyCjHo3I2pNZ28vVmc/9t+/C0c3jaPjip1zY7QQSZMTUfesGj5aBqTdZGiiZGZQEx1jnBJ8hKPpjMxnLlWLYUz5WjagHLkuJEkBmjsHNG3dySmLJGiyNFzYuqAV0xQiYTUiCRdfsDfpLAGyhGIWxDvnWUdiLIjCmFVmr+Z1OKjKDPCQtAVGI80TQvRTBrSTHPVcGQEoyqQAyv91E9elMgOVFQLobhKJYjKRdH4yQTTPJeQRQcXgl75SDGgizxGLsEgeE4EmIQtrEOkzdqDg8Va7SRDxGUW0+69HbO4hKd0RwTzjhwwiElnbJCi3EaJ2yB2CLthgDEIGxw+ky+2JKcHylgMbCigQnAwej0mhmfyeExUe4JsDq9RodgcPq1GCsaObzoCZuxMlKYxfSiOwQYeRluICJoj57ktffS4GHV7ByGwDCpMVYQNhYmg0sC4KmBwwQrEoyfANEYWNkAnIYZLTbIQxHqU4ppoDDmwWnERGHyxR/cnggUNYX2X4SL8IUBGMbzU5h8VMLGgGwmGP0a/R9bgvr1TKOP/QAAAABJRU5ErkJggg==");;
ImageData.fromBase64(function (i) { SheatheReader.toolbeltLegacy = i; }, "iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAIAAABL1vtsAAADgklEQVQ4T32U62/aVhjGnWjL2lWTumVa13AJCcQ2YGNiLr4AhnBJDYYYYyAJtFkgoZCk3aXTWm3ZTUmUSu2XbZ/W/7bP6WGETtOkH/Ce932eB/v4wvCh9dA6Yc3npQUlGPCjQ6HL+Q5qNKmXwef1T/szXv2wc/HMJTytnp/VwI9jixaAjub1JAKR6J5/0302sk/75f9ktP8e6Hw9KMMCI+yM33Mf8RgcdbYox3ulgVv4qpk9dPPD3eLAzWM5bBcwmg8CMOKMyFEgddDKgUMn12/onbrRaW53HPOG5nbbyvUaOg2aASM5EcQcNDMY9xranqU6Vv75r79f/vn3xR8z3vzy+q/R2dPmAx0CyCDu7+gHzSz+lUQEvJ6xFZ7sSGBoK+MnJ6fnV6NH9ouD7PXEuB7nXp7kUVyNCy/62sSOndhEOarxiLuJ+Ln+ycvd++C3cfno2+f2o4mt+R5nli6ady+dd7Q+vXKXrzv3qAxctj53t1PHToLsxXog8FhjJplFMHJS7uFpwWpb8nJPZo61xUOFMFTJdJ6xvmgX4z3rn4h+gmlLjBFkKrl4xmwWao7TG7gPj9oPj9z+sGZutWMMNDNMnskHGRpBLuqa3+cITIVlVj9bYHlW0gsxJZc0KslcOWVUEpmiIIm6n4Fmhh5YuLO0YG/F3bJAIrAXJsc8iCyV5BUlLUbSuVA4El65Ldxjkh5G+JLhv2A0PwPNjHJ82Qx/gKOYRqx6PVn2lsF+BBLi6kZCC4qyELirrn6YYT9W2TsZ9jadzpPZuHUTgaMQeU+MW5F4Tzi8HoorAUkJcmyU9XGiwEkxQWAlMRgTg1I0IHEeyKSwN8J7m6XNaQQ+RpJTpaAeX1Ol0OamGNHyATnrE9I+UfFLujea8onpUDy1KfFqPJSRWSPJFxSuVZYRgeeDRNgGZ2YF0xCsfLysi+mkGImG2TC3wXP4BlEhrCTFki5C0CjKdkmuF2NuJYGI6TPilKJOSQa7VaVVSZIgLVpUo1tqBKDYzhIzRhDsW+peVXZN+b2IvUoU606VsG9p3aqCO8+pJJ3yOypJLLsmzBoewt2aChnxVxIwTvdiUBdpCzOIQK8OtDlIkzIfASNeXCTizIkOGzJutVnE/0AjIIYFxulb6/uOeNpJfNedgho86ar/gvZnMvhhJCeCq4If7ApAJECBDu1TUNMlLWZLovR53wJv0mK9XsQZOgAAAABJRU5ErkJggg==");


SheatheReader.eocColor = [[8, 50], [22, 71], [30, 80]];
SheatheReader.legacyColor = [[68, 91], [61, 94], [51, 90]];

function SheatheReader() {
	this.pos = null;

	this.find = function () {
		var img = a1lib.bindfullrs();
		if (!img) { return false; }
		var islegacy = false;
		var pos = a1lib.findsubimg(img, SheatheReader.toolbeltEoc);
		if (pos.length == 0) {
			pos = a1lib.findsubimg(img, SheatheReader.toolbeltLegacy);
			islegacy = true;
		}
		if (pos.length == 0) { return false; }

		var buf = img.toData(pos[0].x - 31, pos[0].y - 306, 10, 300);
		var foundy = 0;
		for (var a = 299; a >= 0; a--) {
			var sum = 0;
			for (var b = 0; b < 10; b++) {
				var i = buf.pixelOffset(b, a);
				sum += buf.data[i] + buf.data[i + 1] + buf.data[i + 2];
			}
			if (sum > 1000) { foundy = 300 - a; break; }
		}
		if (!foundy) { return false; }

		this.pos = { x: pos[0].x - 44, y: pos[0].y - foundy - 181 , islegacy:islegacy};
		return true;
	}

	var readcount = 0;
	this.read = function () {
		var buf = a1lib.getregion(this.pos.x, this.pos.y,7, 80);
		var sum = 0;
		var data = buf.data;
		var colbounds = (this.pos.islegacy ? SheatheReader.legacyColor : SheatheReader.eocColor);
		for (var x = 0; x < buf.width; x++) {
			for (var y = 0; y < buf.height; y++) {
				var i = buf.pixelOffset(x, y);
				var between =
					data[i] >= colbounds[0][0] && data[i] <= colbounds[0][1] &&
					data[i + 1] >= colbounds[1][0] && data[i + 2] <= colbounds[1][1] &&
					data[i + 2] >= colbounds[2][0] && data[i + 2] <= colbounds[2][1];
				if (!between) { sum++; }
				//buf.data[i] = buf.data[i + 1] = buf.data[i + 2] = between ? 0 : 255;//debug
			}
		}
		//buf.show(); clog(sum / buf.width / buf.height);//debug
		sum /= buf.width * buf.height;
		if(a1lib.aboveversion("1.3.3")?alt1.rsActive: alt1.rsLastActive<3000){
			alt1.overLaySetGroup("sheathereader-" + readcount);
			alt1.overLayRect(a1lib.mixcolor(255, 255, 255), this.pos.x - 1, this.pos.y - 1, buf.width + 2, buf.height + 2, 2000, 1);
			alt1.overLayText(Math.round(sum * 100) + "%", a1lib.mixcolor(255, 255, 255), 10, this.pos.x - 8, this.pos.y - 16, 2000);
			alt1.overLaySetGroup("");
		}
		alt1.overLayClearGroup("sheathereader-" + (readcount - 1));
		readcount++;
		return sum;
	}
}
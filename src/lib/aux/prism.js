/* eslint-disable */
/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+applescript+css-extras+markup-templating+typescript+scss+js-extras+jsx+sass+tsx&plugins=line-numbers */
let _self = typeof window !== 'undefined' ? window : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self : {},
  Prism = (function (g) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i,
      a = 0,
      C = { manual: g.Prism && g.Prism.manual,
        disableWorkerMessageHandler: g.Prism && g.Prism.disableWorkerMessageHandler,
        util: { encode(e) { return e instanceof M ? new M(e.type, C.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(C.util.encode) : e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' '); },
          type(e) { return Object.prototype.toString.call(e).slice(8, -1); },
          objId(e) { return e.__id || Object.defineProperty(e, '__id', { value: ++a }), e.__id; },
          clone: function t(e, n) {
            let r,
              a,
              i = C.util.type(e); switch (n = n || {}, i) { case 'Object': if (a = C.util.objId(e), n[a]) return n[a]; for (const l in r = {}, n[a] = r, e)e.hasOwnProperty(l) && (r[l] = t(e[l], n)); return r; case 'Array': return a = C.util.objId(e), n[a] ? n[a] : (r = [], n[a] = r, e.forEach((e, a) => { r[a] = t(e, n); }), r); default: return e; }
          } },
        languages: { extend(e, a) { const t = C.util.clone(C.languages[e]); for (const n in a)t[n] = a[n]; return t; },
          insertBefore(t, e, a, n) {
            let r = (n = n || C.languages)[t],
              i = {}; for (const l in r) if (r.hasOwnProperty(l)) { if (l == e) for (const o in a)a.hasOwnProperty(o) && (i[o] = a[o]); a.hasOwnProperty(l) || (i[l] = r[l]); } const s = n[t]; return n[t] = i, C.languages.DFS(C.languages, function (e, a) { a === s && e != t && (this[e] = i); }), i;
          },
          DFS: function e(a, t, n, r) {
            r = r || {}; const i = C.util.objId; for (const l in a) {
              if (a.hasOwnProperty(l)) {
                t.call(a, l, a[l], n || l); let o = a[l],
                  s = C.util.type(o); s !== 'Object' || r[i(o)] ? s !== 'Array' || r[i(o)] || (r[i(o)] = !0, e(o, t, l, r)) : (r[i(o)] = !0, e(o, t, null, r));
              }
            }
          } },
        plugins: {},
        highlightAll(e, a) { C.highlightAllUnder(document, e, a); },
        highlightAllUnder(e, a, t) { const n = { callback: t, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' }; C.hooks.run('before-highlightall', n); for (var r, i = n.elements || e.querySelectorAll(n.selector), l = 0; r = i[l++];)C.highlightElement(r, !0 === a, n.callback); },
        highlightElement(e, a, t) {
          for (var n, r, i = e; i && !c.test(i.className);)i = i.parentNode; i && (n = (i.className.match(c) || [, ''])[1].toLowerCase(), r = C.languages[n]), e.className = `${e.className.replace(c, '').replace(/\s+/g, ' ')} language-${n}`, e.parentNode && (i = e.parentNode, /pre/i.test(i.nodeName) && (i.className = `${i.className.replace(c, '').replace(/\s+/g, ' ')} language-${n}`)); let l = { element: e, language: n, grammar: r, code: e.textContent },
            o = function (e) { l.highlightedCode = e, C.hooks.run('before-insert', l), l.element.innerHTML = l.highlightedCode, C.hooks.run('after-highlight', l), C.hooks.run('complete', l), t && t.call(l.element); }; if (C.hooks.run('before-sanity-check', l), l.code) if (C.hooks.run('before-highlight', l), l.grammar) if (a && g.Worker) { const s = new Worker(C.filename); s.onmessage = function (e) { o(e.data); }, s.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 })); } else o(C.highlight(l.code, l.grammar, l.language)); else o(C.util.encode(l.code)); else C.hooks.run('complete', l);
        },
        highlight(e, a, t) { const n = { code: e, grammar: a, language: t }; return C.hooks.run('before-tokenize', n), n.tokens = C.tokenize(n.code, n.grammar), C.hooks.run('after-tokenize', n), M.stringify(C.util.encode(n.tokens), n.language); },
        matchGrammar(e, a, t, n, r, i, l) {
          for (const o in t) {
            if (t.hasOwnProperty(o) && t[o]) {
              if (o == l) return; let s = t[o]; s = C.util.type(s) === 'Array' ? s : [s]; for (let g = 0; g < s.length; ++g) {
                let c = s[g],
                  u = c.inside,
                  h = !!c.lookbehind,
                  f = !!c.greedy,
                  d = 0,
                  m = c.alias; if (f && !c.pattern.global) { const p = c.pattern.toString().match(/[imuy]*$/)[0]; c.pattern = RegExp(c.pattern.source, `${p}g`); }c = c.pattern || c; for (let y = n, v = r; y < a.length; v += a[y].length, ++y) {
                  let k = a[y]; if (a.length > e.length) return; if (!(k instanceof M)) {
                    if (f && y != a.length - 1) { if (c.lastIndex = v, !(x = c.exec(e))) break; for (var b = x.index + (h ? x[1].length : 0), w = x.index + x[0].length, A = y, P = v, O = a.length; A < O && (P < w || !a[A].type && !a[A - 1].greedy); ++A)(P += a[A].length) <= b && (++y, v = P); if (a[y] instanceof M) continue; N = A - y, k = e.slice(v, P), x.index -= v; } else {
                      c.lastIndex = 0; var x = c.exec(k),
                        N = 1;
                    } if (x) {
                      h && (d = x[1] ? x[1].length : 0); w = (b = x.index + d) + (x = x[0].slice(d)).length; let j = k.slice(0, b),
                        S = k.slice(w),
                        E = [y, N]; j && (++y, v += j.length, E.push(j)); const _ = new M(o, u ? C.tokenize(x, u) : x, m, x, f); if (E.push(_), S && E.push(S), Array.prototype.splice.apply(a, E), N != 1 && C.matchGrammar(e, a, t, y, v, !0, o), i) break;
                    } else if (i) break;
                  }
                }
              }
            }
          }
        },
        tokenize(e, a) {
          let t = [e],
            n = a.rest; if (n) { for (const r in n)a[r] = n[r]; delete a.rest; } return C.matchGrammar(e, t, a, 0, 0, !1), t;
        },
        hooks: { all: {}, add(e, a) { const t = C.hooks.all; t[e] = t[e] || [], t[e].push(a); }, run(e, a) { const t = C.hooks.all[e]; if (t && t.length) for (var n, r = 0; n = t[r++];)n(a); } },
        Token: M }; function M(e, a, t, n, r) { this.type = e, this.content = a, this.alias = t, this.length = 0 | (n || '').length, this.greedy = !!r; } if (g.Prism = C, M.stringify = function (a, t, e) { if (typeof a === 'string') return a; if (Array.isArray(a)) return a.map(e => M.stringify(e, t, a)).join(''); const n = { type: a.type, content: M.stringify(a.content, t, e), tag: 'span', classes: ['token', a.type], attributes: {}, language: t, parent: e }; if (a.alias) { const r = Array.isArray(a.alias) ? a.alias : [a.alias]; Array.prototype.push.apply(n.classes, r); }C.hooks.run('wrap', n); const i = Object.keys(n.attributes).map(e => `${e}="${(n.attributes[e] || '').replace(/"/g, '&quot;')}"`).join(' '); return `<${n.tag} class="${n.classes.join(' ')}"${i ? ` ${i}` : ''}>${n.content}</${n.tag}>`; }, !g.document) {
      return g.addEventListener && (C.disableWorkerMessageHandler || g.addEventListener('message', (e) => {
        let a = JSON.parse(e.data),
          t = a.language,
          n = a.code,
          r = a.immediateClose; g.postMessage(C.highlight(n, C.languages[t], t)), r && g.close();
      }, !1)), C;
    } const e = document.currentScript || [].slice.call(document.getElementsByTagName('script')).pop(); return e && (C.filename = e.src, C.manual || e.hasAttribute('data-manual') || (document.readyState !== 'loading' ? window.requestAnimationFrame ? window.requestAnimationFrame(C.highlightAll) : window.setTimeout(C.highlightAll, 16) : document.addEventListener('DOMContentLoaded', C.highlightAll))), C;
  }(_self)); typeof module !== 'undefined' && module.exports && (module.exports = Prism), typeof global !== 'undefined' && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: /<!DOCTYPE[\s\S]+?>/i, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, 'attr-value': { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, 'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.languages.markup.tag.inside['attr-value'].inside.entity = Prism.languages.markup.entity, Prism.hooks.add('wrap', (a) => { a.type === 'entity' && (a.attributes.title = a.content.replace(/&amp;/, '&')); }), Object.defineProperty(Prism.languages.markup.tag, 'addInlined', { value(a, e) { const s = {}; s[`language-${e}`] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i; const n = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } }; n[`language-${e}`] = { pattern: /[\s\S]+/, inside: Prism.languages[e] }; const i = {}; i[a] = { pattern: RegExp('(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)'.replace(/__/g, a), 'i'), lookbehind: !0, greedy: !0, inside: n }, Prism.languages.insertBefore('markup', 'cdata', i); } }), Prism.languages.xml = Prism.languages.extend('markup', {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
!(function (s) { const e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/; s.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: RegExp(`url\\((?:${e.source}|.*?)\\)`, 'i'), selector: RegExp(`[^{}\\s](?:[^{};"']|${e.source})*?(?=\\s*\\{)`), string: { pattern: e, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, s.languages.css.atrule.inside.rest = s.languages.css; const a = s.languages.markup; a && (a.tag.addInlined('style', 'css'), s.languages.insertBefore('inside', 'attr-value', { 'style-attr': { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { 'attr-name': { pattern: /^\s*style/i, inside: a.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, 'attr-value': { pattern: /.+/i, inside: s.languages.css } }, alias: 'language-css' } }, a.tag)); }(Prism));
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, 'class-name': { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend('clike', { 'class-name': [Prism.languages.clike['class-name'], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ }), Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore('javascript', 'keyword', { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: !0, greedy: !0 }, 'function-variable': { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: 'function' }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore('javascript', 'string', { 'template-string': { pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/, greedy: !0, inside: { interpolation: { pattern: /\${[^}]+}/, inside: { 'interpolation-punctuation': { pattern: /^\${|}$/, alias: 'punctuation' }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.markup.tag.addInlined('script', 'javascript'), Prism.languages.js = Prism.languages.javascript;
Prism.languages.applescript = { comment: [/\(\*(?:\(\*[\s\S]*?\*\)|[\s\S])*?\*\)/, /--.+/, /#.+/], string: /"(?:\\.|[^"\\\r\n])*"/, number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?\b/i, operator: [/[&=≠≤≥*+\-\/÷^]|[<>]=?/, /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/], keyword: /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/, class: { pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/, alias: 'builtin' }, punctuation: /[{}():,¬«»《》]/ };
Prism.languages.css.selector = { pattern: Prism.languages.css.selector, inside: { 'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/, 'pseudo-class': /:[-\w]+/, class: /\.[-:.\w]+/, id: /#[-:.\w]+/, attribute: { pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/, greedy: !0, inside: { punctuation: /^\[|\]$/, 'case-sensitivity': { pattern: /(\s)[si]$/i, lookbehind: !0, alias: 'keyword' }, namespace: { pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/, lookbehind: !0, inside: { punctuation: /\|$/ } }, attribute: { pattern: /^(\s*)[-\w\xA0-\uFFFF]+/, lookbehind: !0 }, value: [/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, { pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/, lookbehind: !0 }], operator: /[|~*^$]?=/ } }, 'n-th': { pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/, lookbehind: !0, inside: { number: /[\dn]+/, operator: /[+-]/ } }, punctuation: /[()]/ } }, Prism.languages.insertBefore('css', 'property', { variable: { pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i, lookbehind: !0 } }), Prism.languages.insertBefore('css', 'function', { operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 }, hexcode: /#[\da-f]{3,8}/i, entity: /\\[\da-f]{1,8}/i, unit: { pattern: /(\d)(?:%|[a-z]+)/, lookbehind: !0 }, number: /-?[\d.]+/ });
!(function (h) {
  function v(e, n) { return `___${e.toUpperCase()}${n}___`; }Object.defineProperties(h.languages['markup-templating'] = {}, { buildPlaceholders: { value(a, r, e, o) { if (a.language === r) { const c = a.tokenStack = []; a.code = a.code.replace(e, (e) => { if (typeof o === 'function' && !o(e)) return e; for (var n, t = c.length; a.code.indexOf(n = v(r, t)) !== -1;)++t; return c[t] = e, n; }), a.grammar = h.languages.markup; } } },
    tokenizePlaceholders: { value(p, k) {
      if (p.language === k && p.tokenStack) {
        p.grammar = h.languages[k]; let m = 0,
          d = Object.keys(p.tokenStack); !(function e(n) {
          for (let t = 0; t < n.length && !(m >= d.length); t++) {
            const a = n[t]; if (typeof a === 'string' || a.content && typeof a.content === 'string') {
              let r = d[m],
                o = p.tokenStack[r],
                c = typeof a === 'string' ? a : a.content,
                i = v(k, r),
                u = c.indexOf(i); if (u > -1) {
                ++m; let g = c.substring(0, u),
                  l = new h.Token(k, h.tokenize(o, p.grammar), `language-${k}`, o),
                  s = c.substring(u + i.length),
                  f = []; g && f.push(...e([g])), f.push(l), s && f.push(...e([s])), typeof a === 'string' ? n.splice(...[t, 1].concat(f)) : a.content = f;
              }
            } else a.content && e(a.content);
          } return n;
        }(p.tokens));
      }
    } } });
}(Prism));
Prism.languages.typescript = Prism.languages.extend('javascript', { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ }), Prism.languages.ts = Prism.languages.typescript;
Prism.languages.scss = Prism.languages.extend('css', { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 }, atrule: { pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } }, url: /(?:[-a-z]+-)*url(?=\()/i, selector: { pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m, inside: { parent: { pattern: /&/, alias: 'important' }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ } }, property: { pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } } }), Prism.languages.insertBefore('scss', 'atrule', { keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }] }), Prism.languages.insertBefore('scss', 'important', { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }), Prism.languages.insertBefore('scss', 'function', { placeholder: { pattern: /%[-\w]+/, alias: 'selector' }, statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' }, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: 'keyword' }, operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 } }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
!(function (a) {
  a.languages.insertBefore('javascript', 'function-variable', { 'method-variable': { pattern: RegExp(`(\\.\\s*)${a.languages.javascript['function-variable'].pattern.source}`), lookbehind: !0, alias: ['function-variable', 'method', 'function', 'property-access'] } }), a.languages.insertBefore('javascript', 'function', { method: { pattern: RegExp(`(\\.\\s*)${a.languages.javascript.function.source}`), lookbehind: !0, alias: ['function', 'property-access'] } }), a.languages.insertBefore('javascript', 'constant', { 'known-class-name': [{ pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/, alias: 'class-name' }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' }] }), a.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' }, { pattern: /\bnull\b/, alias: ['null', 'nil'] }, { pattern: /\bundefined\b/, alias: 'nil' }), a.languages.insertBefore('javascript', 'operator', { spread: { pattern: /\.{3}/, alias: 'operator' }, arrow: { pattern: /=>/, alias: 'operator' } }), a.languages.insertBefore('javascript', 'punctuation', { 'property-access': { pattern: /(\.\s*)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/, lookbehind: !0 }, 'maybe-class-name': { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 }, dom: { pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/, alias: 'variable' }, console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' } }); for (let e = ['function', 'function-variable', 'method', 'method-variable', 'property-access'], t = 0; t < e.length; t++) {
    let n = e[t],
      r = a.languages.javascript[n]; a.util.type(r) === 'RegExp' && (r = a.languages.javascript[n] = { pattern: r }); const s = r.inside || {}; (r.inside = s)['maybe-class-name'] = /^[A-Z][\s\S]*/;
  }
}(Prism));
!(function (i) {
  const t = i.util.clone(i.languages.javascript); i.languages.jsx = i.languages.extend('markup', t), i.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i, i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, i.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i, i.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, i.languages.insertBefore('inside', 'attr-name', { spread: { pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/, inside: { punctuation: /\.{3}|[{}.]/, 'attr-value': /\w+/ } } }, i.languages.jsx.tag), i.languages.insertBefore('inside', 'attr-value', { script: { pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i, inside: { 'script-punctuation': { pattern: /^=(?={)/, alias: 'punctuation' }, rest: i.languages.jsx }, alias: 'language-javascript' } }, i.languages.jsx.tag); var o = function (t) { return t ? typeof t === 'string' ? t : typeof t.content === 'string' ? t.content : t.content.map(o).join('') : ''; },
    p = function (t) {
      for (let n = [], e = 0; e < t.length; e++) {
        let a = t[e],
          s = !1; if (typeof a !== 'string' && (a.type === 'tag' && a.content[0] && a.content[0].type === 'tag' ? a.content[0].content[0].content === '</' ? n.length > 0 && n[n.length - 1].tagName === o(a.content[0].content[1]) && n.pop() : a.content[a.content.length - 1].content === '/>' || n.push({ tagName: o(a.content[0].content[1]), openedBraces: 0 }) : n.length > 0 && a.type === 'punctuation' && a.content === '{' ? n[n.length - 1].openedBraces++ : n.length > 0 && n[n.length - 1].openedBraces > 0 && a.type === 'punctuation' && a.content === '}' ? n[n.length - 1].openedBraces-- : s = !0), (s || typeof a === 'string') && n.length > 0 && n[n.length - 1].openedBraces === 0) { let g = o(a); e < t.length - 1 && (typeof t[e + 1] === 'string' || t[e + 1].type === 'plain-text') && (g += o(t[e + 1]), t.splice(e + 1, 1)), e > 0 && (typeof t[e - 1] === 'string' || t[e - 1].type === 'plain-text') && (g = o(t[e - 1]) + g, t.splice(e - 1, 1), e--), t[e] = new i.Token('plain-text', g, null, g); }a.content && typeof a.content !== 'string' && p(a.content);
      }
    }; i.hooks.add('after-tokenize', (t) => { t.language !== 'jsx' && t.language !== 'tsx' || p(t.tokens); });
}(Prism));
!(function (e) {
  e.languages.sass = e.languages.extend('css', { comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m, lookbehind: !0 } }), e.languages.insertBefore('sass', 'atrule', { 'atrule-line': { pattern: /^(?:[ \t]*)[@+=].+/m, inside: { atrule: /(?:@[\w-]+|[+=])/m } } }), delete e.languages.sass.atrule; let t = /\$[-\w]+|#\{\$[-\w]+\}/,
    a = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, { pattern: /(\s+)-(?=\s)/, lookbehind: !0 }]; e.languages.insertBefore('sass', 'property', { 'variable-line': { pattern: /^[ \t]*\$.+/m, inside: { punctuation: /:/, variable: t, operator: a } }, 'property-line': { pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m, inside: { property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }], punctuation: /:/, variable: t, operator: a, important: e.languages.sass.important } } }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore('sass', 'punctuation', { selector: { pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/, lookbehind: !0 } });
}(Prism));
const typescript = Prism.util.clone(Prism.languages.typescript); Prism.languages.tsx = Prism.languages.extend('jsx', typescript);
!(function () {
  if (typeof self !== 'undefined' && self.Prism && self.document) {
    var l = 'line-numbers',
      c = /\n(?!$)/g,
      m = function (e) {
        const t = a(e)['white-space']; if (t === 'pre-wrap' || t === 'pre-line') {
          let n = e.querySelector('code'),
            r = e.querySelector('.line-numbers-rows'),
            s = e.querySelector('.line-numbers-sizer'),
            i = n.textContent.split(c); s || ((s = document.createElement('span')).className = 'line-numbers-sizer', n.appendChild(s)), s.style.display = 'block', i.forEach((e, t) => { s.textContent = e || '\n'; const n = s.getBoundingClientRect().height; r.children[t].style.height = `${n}px`; }), s.textContent = '', s.style.display = 'none';
        }
      },
      a = function (e) { return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null; }; window.addEventListener('resize', () => { Array.prototype.forEach.call(document.querySelectorAll(`pre.${l}`), m); }), Prism.hooks.add('complete', (e) => {
      if (e.code) {
        let t = e.element,
          n = t.parentNode; if (n && /pre/i.test(n.nodeName) && !t.querySelector('.line-numbers-rows')) {
          for (var r = !1, s = /(?:^|\s)line-numbers(?:\s|$)/, i = t; i; i = i.parentNode) if (s.test(i.className)) { r = !0; break; } if (r) {
            t.className = t.className.replace(s, ' '), s.test(n.className) || (n.className += ' line-numbers'); let l,
              a = e.code.match(c),
              o = a ? a.length + 1 : 1,
              u = new Array(o + 1).join('<span></span>'); (l = document.createElement('span')).setAttribute('aria-hidden', 'true'), l.className = 'line-numbers-rows', l.innerHTML = u, n.hasAttribute('data-start') && (n.style.counterReset = `linenumber ${parseInt(n.getAttribute('data-start'), 10) - 1}`), e.element.appendChild(l), m(n), Prism.hooks.run('line-numbers', e);
          }
        }
      }
    }), Prism.hooks.add('line-numbers', (e) => { e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0; }), Prism.plugins.lineNumbers = { getLine(e, t) {
      if (e.tagName === 'PRE' && e.classList.contains(l)) {
        let n = e.querySelector('.line-numbers-rows'),
          r = parseInt(e.getAttribute('data-start'), 10) || 1,
          s = r + (n.children.length - 1); t < r && (t = r), s < t && (t = s); const i = t - r; return n.children[i];
      }
    } };
  }
}());
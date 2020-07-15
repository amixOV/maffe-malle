(this['webpackJsonpmy-app'] = this['webpackJsonpmy-app'] || []).push([
	[0],
	[
		,
		,
		,
		,
		function (e, t, n) {
			e.exports = n(11);
		},
		,
		,
		,
		,
		function (e, t, n) {},
		function (e, t, n) {},
		function (e, t, n) {
			'use strict';
			n.r(t);
			var l = n(0),
				a = n.n(l),
				r = n(3),
				c = n.n(r),
				u = (n(9), n(1));
			n(10);
			var o = function () {
				var e = Object(l.useState)(''),
					t = Object(u.a)(e, 2),
					n = t[0],
					r = t[1],
					c = Object(l.useState)(''),
					o = Object(u.a)(c, 2),
					m = o[0],
					E = o[1],
					d = Object(l.useState)([]),
					i = Object(u.a)(d, 2),
					s = i[0],
					p = i[1];
				console.log(s);
				var b = function (e) {
					var t,
						n = '';
					return (
						e.forEach(function (e) {
							'number' === typeof n
								? 'number' === typeof e
									? ('+' === t && (n += e),
									  '-' === t && (n -= e),
									  '*' === t && (n *= e),
									  '/' === t && (n /= e))
									: (t = e)
								: (n = e);
						}),
						n
					);
				};
				return a.a.createElement(
					'div',
					{ className: 'App' },
					a.a.createElement('div', null, 'HELLO CALCLATE'),
					a.a.createElement(
						'div',
						{ id: 'big_table' },
						a.a.createElement('div', null, n),
						a.a.createElement('br', null),
						a.a.createElement(
							'table',
							{ id: 'table' },
							a.a.createElement(
								'tbody',
								{
									onClick: function (e) {
										return (function (e) {
											if ('=' === e) {
												(m = parseInt(m)), s.push(m), console.log(s);
												var t = b(s);
												return console.log(t), r(t), p([]), void E(t);
											}
											if ('+' === e || '-' === e || '*' === e || '/' === e)
												return (
													console.log(n),
													r(n + e),
													(m = parseInt(m)),
													console.log(m),
													s.push(m),
													s.push(e),
													p(s),
													void E('')
												);
											r(n + e), E(m + (e = e));
										})(e.target.innerText);
									},
								},
								a.a.createElement(
									'tr',
									null,
									a.a.createElement('td', null, '1'),
									a.a.createElement('td', null, '2'),
									a.a.createElement('td', null, '3'),
									a.a.createElement('td', null, '+')
								),
								a.a.createElement(
									'tr',
									null,
									a.a.createElement('td', null, '4'),
									a.a.createElement('td', null, '5'),
									a.a.createElement('td', null, '6'),
									a.a.createElement('td', null, '-')
								),
								a.a.createElement(
									'tr',
									null,
									a.a.createElement('td', null, '7'),
									a.a.createElement('td', null, '8'),
									a.a.createElement('td', null, '9'),
									a.a.createElement('td', null, '*')
								),
								a.a.createElement(
									'tr',
									null,
									a.a.createElement('td', null, '='),
									a.a.createElement('td', null, '0'),
									a.a.createElement('td', null, '.'),
									a.a.createElement('td', null, '/')
								)
							)
						)
					)
				);
			};
			c.a.render(
				a.a.createElement(a.a.StrictMode, null, a.a.createElement(o, null)),
				document.getElementById('root')
			);
		},
	],
	[[4, 1, 2]],
]);
//# sourceMappingURL=main.81873cce.chunk.js.map

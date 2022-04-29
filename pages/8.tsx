'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Script from 'next/script';

export default function Eight(): JSX.Element {
    return (
        <>
            <Head>
                <title>8. 関数 - C++講習会2022</title>
            </Head>
            <div className="container">
                <Navigation />
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>関数</h2>
                    <section>
                        <h3>目標</h3>
                        <p>関数を用いて処理を分けることができる。</p>
                    </section>
                    <section>
                        <h3>語句説明</h3>
                        <section>
                            <h4>関数</h4>
                            <p>
                                与えられた文字や数値に対し、定められた処理を行って結果を返すもの。
                                何回も使う処理を繰り返し書くのが面倒な時に、関数を使用することで簡単になります。
                            </p>
                            <p>関数には処理を書き、名前を記述するだけで呼び出すことができます。それにより、複雑な処理を一行にすることができます。</p>
                            <p>
                                関数は工場の機械に例えることができます。機械は、材料を入れると製品ができます。
                                それを関数に置き換えると、材料は引数、製品は返り値と呼ばれているものになります。
                            </p>
                        </section>
                    </section>
                    <section>
                        <h3>サンプル</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/6ecb07f7be4ab3caa0382f4a17765e81.js"></Script></code>
                        <section>
                            <h4>解説</h4>
                            <section>
                                <h5>関数の宣言</h5>
<pre><code>
返り値の型 関数名(引数の型 引数の変数名) &lbrace;
    関数の中で実行させたい処理
    return 関数が実際返す値;
&rbrace;
</code></pre>
                            </section>
                            <section>
                                <h5>引数</h5>
                                <p>関数に渡す値のこと。機械に入れる材料にあたります。</p>
                                <p>関数に渡す値同士は,で区切ります。同じ型が続いても省略はできません。</p>
                                <p>渡される値と変数名は同じである必要はありません。引数を使わない場合はvoidを入れてください。</p>
                            </section>
                            <section>
                                <h5>返り値</h5>
                                <p>関数で処理した結果。機械を動かした結果できる製品にあたります。</p>
                                <span>
                                    返り値は、&quot;return 返す値;&quot;という文で返します。その関数は、<pre><code>return</code></pre>が出現した行で終了します。
                                    引数をvoidにした場合、<pre><code>return;</code></pre>で終わりです。
                                </span>
                            </section>
                            <section>
                                <h5>void</h5>
                                <p>引数にこれを指定すると何も渡さないで呼び出す関数になります。</p>
                                <p>返り値の型にこれを指定すると何も返さない関数になります。</p>
                            </section>
                        </section>
                    </section>
                    <section>
                        <h2>課題</h2>
                        <ul>
                            <li>呼び出すと文字列の入力を求め、それを名前として挨拶を出力する関数を作る。</li>
                            <li>関数に渡した値の３乗を返す関数を作る。</li>
                            <li><strong>要提出</strong> 問題数を５問以上準備した数字あてゲームを関数を使って作る。</li>
                        </ul>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}

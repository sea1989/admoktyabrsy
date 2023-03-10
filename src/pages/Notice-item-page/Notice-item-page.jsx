import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import Service from '../../components/Service/Service';

import './Notice-item-page.css';

import Warning from '../../components/Warning/Warning';

export const NoticItemPage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
    { id: 1, link: '/notice', title: 'Объявления' },
  ];

  const currentPage = 'Объявления';

  return (
    <main>
      <div className="container">

        <div className="page-wrapper">

          <div className="page-main">
            <article className="notice-item-page">
              <Breadcrumb list={projectsList} currentPage={currentPage} />

              <h1>
                Инструкция по пожарной безопасности
              </h1>

              <span class="info-po__date">19 марта 2019</span>

              <ul>
                <li>1.1. Одной из основных обязанностей владельцев и нанимателей квартир в многоквартирных жилых домах (далее в тексте – жителей),
                  является забота о пожарной безопасности своих квартир, индивидуальных подвальных помещений и помещений общего пользования,
                  знание правил пожарной безопасности, понимание того, как действовать при возникновении пожара и при необходимости эвакуации, умение
                  использовать средства пожаротушения, знание мест расположения этих средств, и обучение этим знаниям детей.
                </li>

                <li>
                  1.2. Жителям домов необходимо выполнять требования этой инструкции, а так же другие
                  нормативные требования в области пожарной безопасности.
                </li>

                <li>
                  1.3. Основными факторами риска, которые могут привести к возникновению пожара в жилых помещениях, являются:
                </li>

                <li>
                  1.3.1. Невыполнение жителями требований пожарной безопасности или невнимательное поведение, в том числе игра детей с огнем;
                </li>

                <li>
                  1.3.2. Невыполнение требований безопасности при использовании систем местного отопления (печей, плит и т.д.), электрических приборов и устройств;
                </li>

                <li>
                  1.3.3. Нарушение требований при хранении опасных веществ и материалов, а так же при проведении огнеопасных работ;
                </li>

                <li>
                  1.3.4. Умышленные действия жителей по созданию условий, способствующих возникновению и распространению пожара.
                </li>

                <li>
                  1.4. Обязанностью жителей является недопущение возникновения пожаров. Жители не должны создавать условия, которые могут привести к возникновению пожара.
                </li>

                <li>
                  1.5. Обязанности жителей в случае возникновения пожара:
                </li>

                <li>
                  1.5.1. Незамедлительно сообщить о возникновении пожара по городскому телефону 01 или по мобильному телефону 010, в Государственную пожарно-спасательную службу, сообщив адрес,
                  место возникновения пожара, фамилию звонящего, а также имеющуюся дополнительную информацию о пожаре.
                </li>

                <li>
                  1.5.2. При возможности приступить к тушению пожара имеющимися средствами пожаротушения,
                  обеспечивая при этом личную безопасность и безопасность других лиц, а так же информировать других лиц о происшествии.
                </li>

                <li>
                  1.5.3. Выполнять распоряжения руководителя тушения пожара и спасательных работ.
                </li>


                <li>
                  1.5.4. Информировать руководителя тушения пожара и спасательных работ о людях, которые находятся или могут находиться в зоне опасности, о путях подъезда и источниках водоснабжения.
                </li>

                <li>
                  1.6. Если необходима эвакуация жителей:
                </li>

                <li>
                  1.6.1. В случае необходимости эвакуации исполнять распоряжения руководителя пожаротушения и спасательных работ;
                </li>

                <li>
                  1.6.2. При эвакуации сохранять спокойствие и не создавать паники; если есть возможность, взять с собой документы, деньги, отключить электрическое и газовое оборудование, закрыть окна и двери в квартире;
                </li>

                <li>
                  1.6.3. Эвакуироваться необходимо по путям эвакуации (коридорам, лестничным клеткам), двигаясь к выходу наружу. Если эти действия невозможны – оставайтесь в квартире.
                  Старайтесь любыми способами информировать спасателей и других людей о своем местонахождении. Примите меры безопасности для того, чтобы в квартире можно было, как можно дольше продержаться и выжить.
                </li>

                <li>
                  1.6.4. Ни в коем случае не используйте лифт во время пожара.
                </li>

              </ul>

            </article>
          </div>

          <div className="page-right">
            <Warning />
          </div>

        </div>

      </div>
      <Service />
    </ main>
  );
};

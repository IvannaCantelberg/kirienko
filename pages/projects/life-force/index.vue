<template>
  <main>
    <AppHeader>
      <ContentQuery :path="`/${locale}/header`" find="one">
        <template #default="{ data }">
          <a href="/" class="nav-link">{{ data['main'] }}</a>
          <a href="#contact" class="nav-link">{{ data['contact'] }}</a>
        </template>
      </ContentQuery>
    </AppHeader>
    <section class="mt-40">
      <LifeForceCarousel />
    </section>

    <h1 class="title text-6xl text-center">Life Force</h1>

    <section class="flex flex-col items-center my-24">
      <div class="mx-14 2xl:max-w-screen-xl text-base relative">
        <FigureFrame class="frame" />
        <p>
          Full of Ukrainian symbols, ‘Life Force (is indestructible)’ is a textile artwork that
          expresses my feelings and understanding of the invasion of Ukraine. The canvas, made
          entirely by hand from leftover fabrics, symbolises the inner strength and resilience of
          the Ukrainian community. A bomb never goes as deep as the roots, so (an attempt) to
          destroy it is futile. This work acts as a source of strength and support, specifically
          created to inspire Ukrainians and give them hope in these difficult times. The canvas is
          available for events or exhibitions where it can serve as a source of strength and a
          reminder of the ongoing struggle for freedom. I use the Life Force canvas as a speaker,
          talking about the war in Ukraine based on individual stories from the blog.
        </p>
        <FigureFrame class="frame reversed" />
        <br />
        <p class="text-secondary">
          <em>
            To reserve the Vitality canvas and/or to speak with it as a speaker contact me via
            <a href="mailto:tatajana.kirienko@gmail.com" class="text-lg text-accent-2 underline">
              tatajanakirienko@gmail.com
            </a>
          </em>
        </p>
      </div>
    </section>

    <section class="flex flex-col items-center my-40">
      <div class="mx-10 lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl text-base">
        <!-- <FigureFrame class="frame" /> -->
        <p class="text-justify">
          Війна почалася для мене з повідомлення о 4:30 ранку від Люди, швачки з прикордонної
          області України: "Вони бомбардують нас." З того першого ранку я почала блог "Голоси з
          України", де ділилася переживаннями п'яти жінок звідти. Моя особиста подорож до цього
          мистецького твору, "Сила Життя (незнищенна)", також почалася в той момент. Це приблизно
          третій день війни. Сидячи зі стиснутими колінами на дивані, я усвідомила: після бомб трава
          все ж буде рости. Руйнування є як неіснуючим, так і марним. Бажання жити в цьому світі не
          можна знищити: "Не можна боротися з силою життя." Це стосується як знищеної природи, так і
          бажання знищити народ. Жодна бомба не може досягти так глибоко, як йдуть коріння. Місяцями
          ми залишалися без діла. Вони, жінки, бо були в оточенні, під бомбардуваннями та в
          укриттях. Я, бо кожен день був наповнений допомогою та шоком. Після місяців самоаналізу та
          малювання з нутра виникла "Сила Життя". Цей витвір мистецтва є більше ніж просто картина;
          це повідомлення надії та витривалості. Для Люди, яка його зшила, цей полотно стало
          надзвичайно важливим. Навіть коли не було електрики через бомбардування, вона продовжувала
          шити вручну. Вона повністю ототожнила себе з печаллю та внутрішньою силою жінки на
          картині. Вона каже: "Вона - це ми." Вона впала на ескіз, коли дізналася, що її чоловік і
          син були відправлені на фронт у Бахмут, найгарячішу точку в Україні. Вона зшила полотно,
          коли дізналася, що її син, Мірослав, загинув. Вона також сподівається, що полотно
          продовжить розповідати історію про те, що відбувається в Україні. Це полотно подорожує до
          місць, де українці тимчасово перебувають, сподіваючись нагадати їм про їхню силу. Я також
          виступаю як спікер про блог та жінок з блогу. Таким чином, воно подорожує разом зі мною.
          Ви могли б назвати це подорожнім джерелом сили.
        </p>
        <br />
        <br />
        <div class="grid gap-5">
          <div class="bg-white p-10">
            <div>
              <h2 class="text-5xl text-center mb-5">Символізм "Сили Життя"</h2>
             
            </div>

            <p class="text-justify">
              Це вибух у темряві. Вицвілі життєві форми у вибуху є українською флорою, що
              представляє "втрачене" у вибуху. Глибиною коренів я показую, як глибоко наші коріння
              всередині нас, підживлені силою світла: Світло, Сила. Ви також могли б побачити жінку
              з традиційним українським вінком. У такому випадку вона символізує українську лють та
              стійкість. Летючі птахи стають очима. Я помітила, що після першого удару бомби в місті
              або селі завжди першими утікають птахи. Але ви також могли б побачити, як моя власна
              голова "вибухнула".
            </p>
          </div>
          
          <div class="bg-white p-10  grid grid-cols-1">
            <div class="flex gap-5 items-center justify-end h-40">  
              <h2 class="text-7xl">Лелеки</h2>                  
              <img src="/img/projects/life-force/symbols/leleky.svg" alt="" class="h-full">     
                          
            </div>
           
            <p class="w-[80%] text-justify">
              Серед усього, що відбувалося, доля лелек мене тривожила. Щороку лелеки повертаються до
              України. Лелеки дуже віддані як одне одному, так і своїм гніздам. Тому лелека є
              українським символом вірності та сімейного щастя. Гніздо лелеки на вашому будинку - це
              благословення. Разом з Україною вони зараз поділяють подібну долю. Через численні
              бомбардування багато гнізд були порушені або зруйновані, і тепер з’явився новий
              феномен — блукаючі, самотні лелеки без гнізд і без партнерів. Вони йдуть і йдуть,
              полями, вздовж доріг.
            </p>
            
          </div>
         <div class="bg-white p-10 grid grid-cols-1">
            <div class="flex gap-5 items-center justify-start">                   
              <img src="/img/projects/life-force/symbols/embroidery.svg" alt="" class="h-40">     
              <h2 class="text-7xl">Фундаменти</h2>             
            </div>
            <p class="w-[80%] text-justify justify-self-end">
              Лелеки сидять на стародавніх фундаментах. Це представляє історію України, яка сягає
              корінням ще до християнства. Ці дуже міцні, старі фундаменти, старіші за історію
              Російської імперії, протистоять висловлюванням Путіна, наприклад, "Україна - це
              неіснуюча країна" або "Це просто Малоросія."
            </p>
          </div>
          <div class="bg-white p-10  grid grid-cols-1">
            <div class="flex gap-5 items-center justify-end">     
              <h2 class="text-7xl">Сонце і місяць</h2>                     
              <img src="/img/projects/life-force/symbols/sun.svg" alt="" class="h-40">     
                    
            </div>
            <p class="w-[80%] text-justify">
              Над лелеками сяє місяць, намальований так, як він зображений на стародавніх
              слов'янських амулетах, що представляє жіноче начало за стародавніми віруваннями
              природи. Противага, сонце, чоловіче начало, з'являється з іншого боку у вигляді
              соняшника. Біля сонця стоїть Перун; стародавній верховний бог війни і боротьби, серед
              інших речей. Стародавня слов'янська віра ґрунтується на дуальності; протилежних силах.
              Одне потрібне для іншого, як інь і янь. Можливо, і зараз також. Щоб захистити
              вразливих, іноді необхідно боротися. Сподіваюся, з часом жіноче, м’яке зможе знову
              дбати про чоловіче, і процес зцілення зможе розпочатися.
            </p>
          </div>

          <div class="bg-white p-10  grid grid-cols-1">
            <div class="flex gap-10 items-center justify-start">                   
              <img src="/img/projects/life-force/symbols/perun.svg" alt="" class="h-40 w-16">     
              <h2 class="text-7xl text-center">Схід сонця</h2>             
            </div>
            <p class="w-[80%] text-justify justify-self-end">
              Серед усієї темряви я хотіла зобразити схід сонця, знак надії, бо справді: "Найтемніша
              година перед світанком." Це прислів'я означає, що найважче перед тим, як стане краще.
              Кольори сходу сонця були "перетворені" та перетворені на стрічки, як у традиційному
              квітковому вінку. Стиль, у якому намальовані стрічки, є даниною значній і сміливій
              художниці Любові Панченко. Ця хоробра та важлива художниця померла у віці 86 років у
              бункері під час окупації Бучі.
            </p>
          </div>
          <div class="bg-white p-10 grid grid-cols-1">
            <div class="flex gap-5 items-center justify-end h-40">                   
              <!-- <img src="/img/projects/life-force/symbols/" alt="" class="w-28">      -->
              <h2 class="text-7xl">Пов'язка на голові</h2>             
            </div>
            <p class="w-[80%] text-justify">
              Пов'язка на голові вишита вручну з фольклорними українськими елементами в кольорах
              жалоби.
            </p>
          </div>
        </div>

        <!-- <FigureFrame class="frame reversed" /> -->
        <br />

        <p class="text-secondary">
          <em>
            Це полотно було профінансоване через краудфандинг. Все, що ми зберемо зараз, буде
            використано для оренди спільного робочого простору замість того, щоб шити в вітальнях.
          </em>
        </p>
      </div>
      <a
        href="https://gofund.me/01c944a4"
        target="_blank"
        class="btn-link content-center px-10 text-lg hover:shadow-xl transition-all my-10"
      >
        Go Fund
        <IconArrowRight />
      </a>
    </section>
  </main>
</template>

<script setup lang="ts">
import LifeForceCarousel from '~/components/life-force-project/LifeForceCarousel.vue'
import FigureFrame from '~/components/icons/FigureFrame.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>

<style scoped>
.frame {
  stroke: var(--color-border-accent-2);
  position: absolute;
  top: -50px;
  left: -50px;
  transform: rotate(0);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.frame.reversed {
  position: absolute;
  right: -50px;
  bottom: -50px;
  top: initial;
  left: inherit;
  transform: rotate(180deg);
}
</style>

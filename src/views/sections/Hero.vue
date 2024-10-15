<template>
  <section id="hero">
    <v-img
      :src="require('@/assets/me.jpg')"
      gradient="to top, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)"
      height="100vh"
    >
      <v-container class="fill-height px-4 py-12">
        <!-- <v-row>
          <v-col style="max-width: 700px"> -->
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <h1 class="display-1 font-weight-bold text-uppercase mb-4">
            Hi, I'm Laurent Della-Negra
          </h1>
          <div class="headline mb-6">
            I'm a Front-End Developer
          </div>
          <div class="mb-12">
            I built a lot of web <strong>SPA</strong> (single page application)
            and I worked a lot with JavaScript (<strong>ES5</strong>,
            <strong>ES7+</strong>), <strong>TypeScript</strong> combined with
            frameworks like <strong>Angular</strong>,
            <strong>ReactJS</strong> and <strong>VueJS</strong> &#9829;. I am
            particularly involved in <strong>mobile first</strong> approach and
            I am constantly updating my web techs knowledge. I've also worked in
            <strong>Australia</strong> for 9 months to get a foreign IT
            experience.
          </div>
          <v-btn color="secondary" to="contact">
            Contact Me
          </v-btn>
          <!-- </v-col>
        </v-row> -->
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

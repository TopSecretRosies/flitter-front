<template>
  <section class="hero">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-11 offset-sm-1 col-md-9 offset-md-1 col-lg-8 offset-lg-2">
          <div class="cardbox shadow-lg bg-white">
            <div class="cardbox-heading">
              <!-- START dropdown-->
              <div class="dropdown float-right">
                <button class="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
                  <em class="fa fa-ellipsis-h"></em>
                </button>
                <div class="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style="
                    position: absolute;
                    transform: translate3d(-136px, 28px, 0px);
                    top: 0px;
                    left: 0px;
                    will-change: transform;
                  ">
                  <a class="dropdown-item" href="#">Hide post</a>
                  <a class="dropdown-item" href="#">Stop following</a>
                  <a class="dropdown-item" href="#">Report</a>
                </div>
              </div>
              <!--/ dropdown -->
              <div class="media m-0">
                <div class="d-flex mr-3" v-for="author in publication.author" :key="author.id" :author="author">
                  <a href=""><img class="img-fluid rounded-circle" :src="author.avatar" alt="User" /></a>
                  <i class="fas fa-check-circle" style="color:darkblue"></i>
                </div>
                <div class="media-body" v-for="author in publication.author" :key="author.username" :author="author">
                  <h3 class="m-0">{{ author.username }}</h3>
                  <small><span><i class="icon ion-md-time"></i>
                      {{ formatDate(publication.createdAt) }}</span></small>
                </div>
              </div>
              <!--/ media -->
            </div>
            <!--/ cardbox-heading -->

            <div class="cardbox-item text-center">
              <img class="img-fluid w-50 rounded mx-auto d-block" :src="publication.image" alt="Image" />
            </div>
            <!--/ cardbox-item -->
            <div class="cardbox-base">
              <ul class="float-right">
                <li>
                  <a><i class="fa fa-comments"></i></a>
                </li>
                <li>
                  <a><em class="mr-5">12</em></a>
                </li>
                <li>
                  <a><i class="fa fa-share-alt"></i></a>
                </li>
                <li>
                  <a><em class="mr-3">03</em></a>
                </li>
              </ul>
              <ul>
                <li>
                  <a><i class="fa fa-thumbs-up"></i></a>
                </li>
                <li>
                  <a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg"
                      class="img-fluid rounded-circle" alt="User" /></a>
                </li>
                <li>
                  <a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg"
                      class="img-fluid rounded-circle" alt="User" /></a>
                </li>
                <li>
                  <a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg"
                      class="img-fluid rounded-circle" alt="User" /></a>
                </li>
                <li>
                  <a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg"
                      class="img-fluid rounded-circle" alt="User" /></a>
                </li>
                <li>
                  <a><span>242 Likes</span></a>
                </li>
              </ul>
            </div>

            <div class="cardbox-base text-center overflow-auto ">
              <p class="text" style="word-wrap: break-word;">{{ publication.text }}</p>
            </div>
            <!--/ cardbox-base -->
            <div class="cardbox-comments" v-for="author in publication.author" :key="author.id" :author="author">
              <span class="comment-avatar float-left">
                <a href=""><img class="rounded-circle" :src="author.avatar" alt="..." /></a>
              </span>
              <div class="search">
                <input placeholder="Write a comment" type="text" />
                <button><i class="fa fa-camera"></i></button>
              </div>
              <!--/. Search -->
            </div>
            <!--/ cardbox-like -->
          </div>
          <!--/ cardbox -->
        </div>
        <!--/ col-lg-6 -->
        <!--/ col-lg-3 -->
      </div>
      <!--/ row -->
    </div>
    <!--/ container -->
  </section>
</template>

<script lang="ts">
import { Publications } from "@/models/Publications";
import { defineComponent, PropType } from "vue";
import moment from "moment";
export default defineComponent({
  props: {
    publication: {
      type: Object as PropType<Publications>,
      required: true,
    },
  },

  methods: {
    formatDate: function (dt: any) {
      return moment(dt, "YYYYMMDD hh:mm:ss").fromNow();
    },
  },
});
</script>

<style scoped>
* {
  max-width: 100%;
}

.hero {
  padding: 3.25rem 0px !important;
  margin: 0px !important;
}

.cardbox {
  border-radius: 3px;
  margin-bottom: 20px;
  padding: 0px !important;
}

/* ------------------------------- */
/* Cardbox Heading
---------------------------------- */
.cardbox .cardbox-heading {
  padding: 16px;
  margin: 0;
}

.cardbox .btn-flat.btn-flat-icon {
  border-radius: 50%;
  font-size: 24px;
  height: 32px;
  width: 32px;
  padding: 0;
  overflow: hidden;
  color: #fff !important;
  background: #b5b6b6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.cardbox .float-right .dropdown-menu {
  position: relative;
  left: 13px !important;
}

.cardbox .float-right a:hover {
  background: #f4f4f4 !important;
}

.cardbox .float-right a.dropdown-item {
  display: block;
  width: 100%;
  padding: 4px 0px 4px 10px;
  clear: both;
  font-weight: 400;
  font-family: "FuenteRegular";
  font-size: 14px !important;
  color: #848484;
  text-align: inherit;
  white-space: nowrap;
  background: 0 0;
  border: 0;
}

/* .text{
overflow: hidden;
word-wrap: break-word;
width: 100px;
height: auto;
}
/* ------------------------------- */
/* Media Section
---------------------------------- */
.media {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
}

.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}

.media .mr-3 {
  margin-right: 1rem !important;
}

.media img {
  width: 88px !important;
  height: 78px !important;
  padding: 2px;
  border: 2px solid #f4f4f4;
}

.media-body {
  -ms-flex: 1;
  flex: 1;
  padding: 0.4rem !important;
}

.media-body p {
  font-family: "FuenteRegular";
  font-weight: 500 !important;
  font-size: 24px;
  color: #88898a;
}

.media-body small span {
  font-family: "FuenteRegular";
  font-size: 12px;
  color: #aaa;
  margin-right: 10px;
}

/* ------------------------------- */
/* Cardbox Item
---------------------------------- */
.cardbox .cardbox-item {
  display: block;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}

.fw {
  width: 100% !important;
  height: auto;
}

/* ------------------------------- */
/* Cardbox Base
---------------------------------- */
.cardbox-base {
  border-bottom: 2px solid #f4f4f4;
}

.cardbox-base ul {
  margin: 10px 0px 10px 15px !important;
  padding: 10px !important;
  font-size: 0px;
  display: inline-block;
}

.cardbox-base li {
  list-style: none;
  margin: 0px 0px 0px -8px !important;
  padding: 0px 0px 0px 0px !important;
  display: inline-block;
}

.cardbox-base li a {
  margin: 0px !important;
  padding: 0px !important;
}

.cardbox-base li a i {
  position: relative;
  top: 4px;
  font-size: 16px;
  color: #8d8d8d;
  margin-right: 15px;
}

.cardbox-base li a span {
  font-family: "FuenteRegular";
  font-size: 14px;
  color: #8d8d8d;
  margin-left: 20px;
  position: relative;
  top: 5px;
}

.cardbox-base li a em {
  font-family: "FuenteRegular";
  font-size: 14px;
  color: #8d8d8d;
  position: relative;
  top: 3px;
}

.cardbox-base li a img {
  width: 25px;
  height: 25px;
  margin: 0px !important;
  border: 2px solid #fff;
}

/* ------------------------------- */
/* Cardbox Comments
---------------------------------- */
.cardbox-comments {
  padding: 10px 40px 20px 40px !important;
  font-size: 0px;
  text-align: center;
  display: inline-block;
}

.cardbox-comments .comment-avatar img {
  margin-top: 1px;
  margin-right: 10px;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 40px;
  height: 40px;
}

.cardbox-comments .comment-body {
  overflow: auto;
}

.search {
  position: relative;
  right: -60px;
  top: -40px;
  margin-bottom: -40px;
  border: 2px solid #f4f4f4;
  width: 100%;
  overflow: hidden;
}

.search input[type="text"] {
  background-color: #fff;
  line-height: 10px;
  padding: 15px 60px 20px 10px;
  border: none;
  border-radius: 4px;
  width: 180px;
  font-family: "FuenteRegular";
  font-size: 14px;
  color: #8d8d8d;
  height: inherit;
  font-weight: 700;
}

.search button {
  position: absolute;
  right: 0;
  top: 0px;
  border: none;
  background-color: transparent;
  color: #bbbbbb;
  padding: 15px 25px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.search button i {
  font-size: 20px;
  line-height: 30px;
  display: block;
}

/* ------------------------------- */
/* Author
---------------------------------- */
.author a {
  font-family: "FuenteRegular";
  font-size: 16px;
  color: #00c4cf;
}

.author p {
  font-family: "FuenteRegular";
  font-size: 16px;
  color: #8d8d8d;
}
</style>

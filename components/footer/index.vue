<template>
  <div class="footer">
    <span class="footer__title">Vali Mohebbi</span>
    <div class="footer__menu">
      <ul class="footer__menu__list">
        <li
          v-for="(item, i) in menuItems"
          :key="i"
          class="footer__menu__list__items"
        >
          <ShareNavbarBtn :item="item" />
        </li>
      </ul>
      <div class="footer__menu__know-more">
        <div class="footer__menu__know-more__content">
          <div class="footer__menu__know-more__content__header">
            <i class="ri-heart-fill"></i>
            <div class="footer__menu__know-more__content__header__items">
              <ShareNavbarBtn
                v-for="(data, i) in knowMoreItems"
                :key="i"
                :item="data"
              />
            </div>
            <img src="/font/hearing.svg" alt="icon" >
          </div>
          <span>if You wanna to Know more about me :)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {
			knowMoreItems: [
				{
					id: 0,
					title: "Spotify",
					href: "/",
				},
				{
					id: 1,
					title: "Last.fm",
					href: "/",
				},
			],
			menuItems: [
				{
					id: 0,
					title: "Email",
					href: "/",
				},
				{
					id: 1,
					title: "Linkdin",
					href: "/",
				},
				{
					id: 2,
					title: "Dribble",
					href: "/graphic",
				},
				{
					id: 3,
					title: "Behance",
					href: "/",
				},
				{
					id: 4,
					title: "Medium",
					href: "/",
				},
				{
					id: 5,
					title: "Researchgate",
					href: "/",
				},
				{
					id: 6,
					title: "Google Scholar",
					href: "/",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 530px;
  background-color: #fff;
  padding: 90px 140px 0 140px;
  display: flex;
  flex-direction: column;
  &__title {
    font-size: 50px;
    font-weight: 500;
    color: #333;
  }
  &__menu {
    width: 100%;
    color: #333;
    margin: 50px 0 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    &__know-more {
      width: 50%;
      
      &__content {
        width: 230px;
        height: 150px;
        border: 1px solid #fce623;
        display: flex;
        margin-left: 20px;
        align-items: center;
        justify-content: center;
        position: relative;
        span {
          font-size: 12px;
          width: 125px;
          height: 30px;
        }
        &__header {
          width: 200px;
          height: 20px;
          background-color: #fff;
          color: #fce623;
          font-size: 24px;
          position: absolute;
          top: -10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &__items {
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      }
    }
    &__list {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      &__items {
        font-size: 16px;
      }
    }
  }
}
@media only screen and (max-width: 1660px) {
  .footer {
   
    &__menu {
   
      &__know-more {
        width: 35%;
        &__content {
          width: 180px;
          height: 100px;
        }
      }
      &__list {
        width: 65%;
          &__items {
        font-size: 12px;
      }
      }
    }
  }
}
@media only screen and (max-width: 1264px) {
  .footer {
   
    &__menu {
   
      &__know-more {
        width: 15%;
        &__content {
          width: 180px;
          height: 100px;
        }
      }
      &__list {
        width: 80%;
          &__items {
        font-size: 12px;
      }
      }
    }
  }
}

@media only screen and (max-width: 960px) {
    .footer {
    padding: 50px 20px 50px 20px;
    min-height: 600px;

    &__title {
      font-size: 38px;
    }
    &__menu {
      margin: 20px 0 0 0;
      flex-direction: column;
      &__know-more {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
  
      }
      &__list {
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        &__items {
          font-size: 12px;
          margin: 0 0 25px 0;
        }
      }
    }
  }
}
</style>

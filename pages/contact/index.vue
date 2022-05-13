<template>
  <div class="contact-us">
    <ShareTitle :description="contactData.heroTitle" :page-title="pageTitle" />
    <div class="contact-us__form" v-if="contactData">
      <div class="contact-us__form__content">
        <span class="contact-us__form__content__discription">
          {{ contactData.description }}
        </span>
        <div class="contact-us__form__content__info">
          <div class="contact-us__form__content__info__text">
            <span class="contact-us__form__content__info__text__title"
              >Address</span
            >
            <span>{{ contactData.address }}</span>
            <div class="contact-us__form__content__info__text__email">
              <span>{{contactData.email}}</span>
              <span>{{contactData.phone}}</span>
            </div>
          </div>
          <div class="contact-us__form__content__info__form">
            <span class="contact-us__form__content__info__form__title"
              >Get in Touch</span
            >
            <form class="w-full max-w-sm">
              <div class="md:flex md:items-center ml-2">
                <div class="md:w-2/5 border-b border-teal-500 py-2">
                  <input
                    class="
                      appearance-none
                      bg-transparent
                      border-none
                      w-full
                      text-gray-700
                      mr-3
                      py-1
                      px-2
                      leading-tight
                      focus:outline-none
                    "
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div class="md:w-1/5"></div>
                <div class="md:w-2/5 border-b border-teal-500 py-2">
                  <input
                    class="
                      appearance-none
                      bg-transparent
                      border-none
                      w-full
                      text-gray-700
                      mr-3
                      py-1
                      px-2
                      leading-tight
                      focus:outline-none
                    "
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="md:w-full border-b border-teal-500 py-2 mt-6">
                <textarea
                  class="
                    appearance-none
                    bg-transparent
                    border-none
                    w-full
                    text-gray-700
                    mr-3
                    py-1
                    px-2
                    leading-tight
                    focus:outline-none
                  "
                  type="text"
                  placeholder="Type your message here..."
                />
              </div>
              <div class="flex md:w-full mt-6">
                <div class="w-1/5"></div>
                <button
                  class="
                    md:w-3/5
                    bg-transparent
                    hover:bg-white-500
                    text-white-700
                    font-semibold
                    py-2
                    px-4
                    border border-white-500
                    rounded
                  "
                >
                  Submit
                </button>
                <div class="w-1/5"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			contactData: null
		};
	},
	async created() {
		const d = await this.$axios.$get("/contact");
		this.contactData = d.data.attributes;
	}
};
</script>
<style lang="scss" scoped>
.contact-us {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__content {
      margin: 40px 0 0 0;
      background-color: rgb(34, 34, 34);
      height: 500px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      &__discription {
        margin: 0 140px 0 140px;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
      }
      &__info {
        color: #fff;
        padding: 0 140px 0 140px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__text {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          font-size: 24px;
          &__title {
            font-size: 26px;
            font-weight: bold;
            margin: 0 0 40px 0;
          }
          &__email {
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            font-size: 24px;
          }
        }
        &__form {
          width: 50%;
          display: flex;
          flex-direction: column;
          &__title {
            font-size: 24px;
            font-weight: 700;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 960px) {
  .contact-us {
    &__form {
      margin: 50px 0 0 0;
      &__content {
        height: 800px;
        &__discription {
          margin: 20px 100px 0 100px;
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .contact-us {
    &__form {
      margin: 50px 0 0 0;

      &__content {
        &__discription {
          margin: 20px 20px 0 20px;
        }
        &__info {
          flex-direction: column;
          padding: 0 30px 0 30px;
          &__text {
            width: 100%;
            &__title {
              font-size: 24px;
              font-weight: 700;
              margin: 0 0 20px 0;
            }
            &__email {
              margin-top: 20px;
              display: flex;
              flex-direction: column;
            }
          }
          &__form {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            &__title {
              font-size: 24px;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>

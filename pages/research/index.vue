<template>
  <div class="research">
    <ShareTitle :description="description" :page-title="pageTitle" />
    <span class="research__title">Topics:</span>
    <div class="research__content">
      <div
        v-for="(item, i) in contents"
        :key="i"
        class="research__content__description"
      >
        <span class="research__content__description__title">{{
          item.title
        }}</span>
        <span class="research__content__description__desc">{{
          item.desc
        }}</span>
        <div class="research__content__description__border"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Research',
  data() {
    return {
      description: 'My Research Passion.',
      pageTitle: 'Research .',
      contents: [
        {
          title: 'Published',
          desc: '_is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
          title: 'Under Review',
          desc: '_is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
          title: 'Conference',
          desc: '_is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
          title: 'Master thesis',
          desc: '_is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
          title: 'Interests',
          desc: '_is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
          title: 'Book translating',
          desc: '_is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
          title: 'Journal',
          desc: '_is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.research {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
  &__title {
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    margin: 0 100px 70px 100px;
    color: #707070;
  }
  &__content {
    color: #333;
    margin: 0 100px 100px 100px;

    &__description {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;

      &__title {
        font-size: 60px;
        font-weight: 500;
      }
      &__desc {
        font-size: 16px;
        line-height: 28px;
      }
      &__border {
        width: 50%;
        margin-top: 10px;
        border-top: 1px solid #416bf0;
      }
    }
  }
}
@media only screen and (max-width: 960px) {
  .research {
    &__title {
      font-size: 14px;
      font-weight: 500;
      width: 100%;
      margin: 0 16px 24px 16px;
      color: #707070;
    }
    &__content {
      color: #333;
      margin: 0 16px 100px 16px;

      &__description {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;

        &__title {
          font-size: 60px;
          font-weight: 500;
        }
        &__desc {
          font-size: 16px;
          line-height: 28px;
        }
        &__border {
          width: 50%;
          margin-top: 10px;
          border-top: 1px solid #416bf0;
        }
      }
    }
  }
}
</style>

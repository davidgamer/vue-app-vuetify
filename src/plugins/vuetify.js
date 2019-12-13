import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors';


Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        dark: true,
        themes:{
            light: {
            primary: colors.cyan.base,
            secondary: colors.grey.lighten3,
            accent: colors.blue.base,
            error: colors.pink.base,
            warning: colors.lime.base,
            info: colors.purple.base,
            success: colors.green.base
            }
        }
    }
});

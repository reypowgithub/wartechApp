const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

// ⚠️ Filter .svg dari assetExts dan tambahkan ke sourceExts
const { assetExts, sourceExts } = config.resolver;
config.resolver.assetExts = assetExts.filter(ext => ext !== "svg");
config.resolver.sourceExts = [...sourceExts, "svg"];

// ✅ Tambahkan react-native-svg-transformer
config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

// ✅ Sertakan NativeWind + global.css
module.exports = withNativeWind(config, { input: "./global.css" });

import "./DragonBall.css";

import React from "react";
import { motion } from "framer-motion"


const DragonBallOutlineVariants = {
  initial: {
    pathLength: 0,
    fill: 'rgba(0,0,0,0)'
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeOut"
    }
  }
}
const DragonBallFillVariants = {
  initial: {
    fill: 'rgba(0,0,0,0)',
  },
  animate: {
    fill: 'rgba(0,0,0,1)',
    transition: {
      delay: 2,
      duration: 1
    }
  }
}
const LetterFillVariants= {
  initial: {
    opacity: 0,
    scale: 0
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 2,
    }
  }
}

const ZOutlineVariants = {
  initial: {
    pathLength: 0,
    fill: 'rgba(0,0,0,0)'
  },
  animate: {
    pathLength: 1,
    transition: {
      delay: 1.5,
      duration: 1.25
    }
  }
}
const ZOutlineFillVariants = {
  initial: {
    fill: 'rgba(0,0,0,0)',
  },
  animate: {
    fill: 'rgba(0,0,0,1)',
    transition: {
      delay: 2.75,
      duration: 1
    }
  }
}
const ZFillVariants= {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 3,
    }
  }
}

const DragonBall = (props) => {



  return (
    <svg version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1436 376" 
      width="1436"
      height="376"
      className="dbz-logo"
    >
      <title>Dragon_Ball_Z_Logo-svg</title>
      <g id="layer4">
      </g>
      <g id="layer2">
      </g>
      <g id="layer3">
        <g id="g3039">
          <g id="g3032">
            <motion.path
              id="Z-Stroke"
              variants={ZOutlineVariants}
              initial="initial"
              animate="animate"
              fill-rule="evenodd"
              strokeWidth={props.strokeWidth}
              stroke="rgba(0,0,0,1)"
              fill="rgba(0,0,0,0)"
              d="M1432.47 3.41L1277.41 194.5C1276.04 196.13 1276.16 196.22 1276.94 197.94L1283.66 212.75C1284.54 214.46 1284.38 214.48 1285.82 213.19L1387.66 121.34C1391.1 118.06 1390.73 118.46 1389.41 122.69L1311.82 371.75C1311.09 374.04 1310.99 374.03 1308.69 374.03L983.79 373.59C981.08 373.65 981.54 373.56 983.1 371.69L1132.82 191.88C1134.5 189.76 1134.84 189.46 1133.44 186.97L1119.69 162.5C1118.03 159.49 1118.16 159.88 1115.91 162.16L1026.5 252.34C1023.72 255.3 1023.97 255.06 1024.85 251.31L1082 6.41C1082.92 2.86 1083.56 3.17 1087.13 3.16L1431.19 1.53C1431.89 1.53 1432.42 1.5 1432.82 1.5C1434.01 1.49 1433.86 1.7 1432.47 3.41ZM1198.85 114C1198.56 114 1198.17 114.03 1197.69 114.03L1163.94 114.31C1162.3 114.29 1161.94 114.53 1160.88 115.66L1141.79 135.94C1140.02 137.8 1140.5 137.44 1142.66 137.47L1177.25 137.88C1178.76 137.9 1178.98 137.84 1179.85 136.84L1198.54 115.38C1199.69 114.2 1199.72 114.01 1198.85 114L1198.85 114ZM1241.07 239.53C1239.99 239.59 1239.45 239.94 1238.29 241.16L1221.07 260.22C1219.51 261.95 1219.52 261.82 1221.82 261.94L1229.04 262.25C1230.93 262.33 1231.61 262.25 1233.1 261L1255.29 242.06C1257.43 240.23 1257.4 240.3 1254.72 240.16L1242.35 239.56C1241.82 239.54 1241.42 239.51 1241.07 239.53L1241.07 239.53Z"
            />
            <motion.path
              id="Z-StrokeFill"
              variants={ZOutlineFillVariants}
              initial="initial"
              animate="animate"
              fill-rule="evenodd"
              d="M1432.47 3.41L1277.41 194.5C1276.04 196.13 1276.16 196.22 1276.94 197.94L1283.66 212.75C1284.54 214.46 1284.38 214.48 1285.82 213.19L1387.66 121.34C1391.1 118.06 1390.73 118.46 1389.41 122.69L1311.82 371.75C1311.09 374.04 1310.99 374.03 1308.69 374.03L983.79 373.59C981.08 373.65 981.54 373.56 983.1 371.69L1132.82 191.88C1134.5 189.76 1134.84 189.46 1133.44 186.97L1119.69 162.5C1118.03 159.49 1118.16 159.88 1115.91 162.16L1026.5 252.34C1023.72 255.3 1023.97 255.06 1024.85 251.31L1082 6.41C1082.92 2.86 1083.56 3.17 1087.13 3.16L1431.19 1.53C1431.89 1.53 1432.42 1.5 1432.82 1.5C1434.01 1.49 1433.86 1.7 1432.47 3.41ZM1198.85 114C1198.56 114 1198.17 114.03 1197.69 114.03L1163.94 114.31C1162.3 114.29 1161.94 114.53 1160.88 115.66L1141.79 135.94C1140.02 137.8 1140.5 137.44 1142.66 137.47L1177.25 137.88C1178.76 137.9 1178.98 137.84 1179.85 136.84L1198.54 115.38C1199.69 114.2 1199.72 114.01 1198.85 114L1198.85 114ZM1241.07 239.53C1239.99 239.59 1239.45 239.94 1238.29 241.16L1221.07 260.22C1219.51 261.95 1219.52 261.82 1221.82 261.94L1229.04 262.25C1230.93 262.33 1231.61 262.25 1233.1 261L1255.29 242.06C1257.43 240.23 1257.4 240.3 1254.72 240.16L1242.35 239.56C1241.82 239.54 1241.42 239.51 1241.07 239.53L1241.07 239.53Z"
            />
            
            <motion.path
              id="Z-Fill"
              variants={ZFillVariants}
              initial="initial"
              animate="animate"
              class="shp1"
              d="M1099.8 20.27L1393.29 19.86C1396.14 19.81 1396.31 19.6 1394.43 21.89L1256.13 190.79C1254.69 192.62 1255.07 192.67 1255.71 194.5L1265.33 219.02C1266.27 221.28 1266.05 221.12 1263.75 221.14L1233.23 221.45C1231.2 221.44 1231.02 221.62 1229.95 222.96L1187.64 276.25C1185.84 278.42 1186.08 278.19 1188.74 278.25L1234.7 279.37C1236.84 279.36 1237.43 279.36 1238.89 278.06L1355.48 173.98C1357.75 171.98 1357.95 171.35 1356.95 174.51L1299.71 354.35C1299.04 356.56 1298.93 356.52 1296.75 356.52L1022.61 356.52C1019.16 356.52 1019.2 356.8 1021.35 354.22L1154.96 193.81C1156.64 191.83 1156.48 191.86 1155.41 189.88L1139.73 160.66C1138.18 157.49 1137.96 157.77 1141.37 157.72L1184.28 156.99C1186.98 157 1187.49 156.77 1189.08 154.8L1234.96 98.43C1236.62 96.37 1236.59 96.52 1233.96 96.53L1156.15 96.92C1152.94 96.88 1152.7 97.43 1150.88 99.32L1059.55 193.8C1055.59 198.05 1056.39 197.5 1057.53 192.51L1096.38 22.67C1096.96 20.04 1097.26 20.27 1099.8 20.27L1099.8 20.27Z"
            />
          </g>

          <g id="g3015">
            <motion.path 
              variants={DragonBallOutlineVariants}
              initial="initial"
              animate="animate"
              id="DB-Stroke"
              fill-rule="evenodd"
              strokeWidth={props.strokeWidth}
              stroke="rgba(0,0,0,1)"
              fill="rgba(0,0,0,0)"
              d="M132.1 65.09C134.16 66.92 134.2 66.83 134.38 63.78L135.44 49.09C135.61 46.73 135.63 46.59 137.97 46.25C181.6 40.4 215.33 57.52 244.25 85.72C245.56 87 245.72 87.59 246.19 85.22L246.91 81.69C247.31 79.68 247.24 79.81 249.41 80.28L317.54 93.53C320.02 94.02 320.14 94.18 320.85 96.81L328.04 121.72C328.81 124.41 328.7 124.43 330.85 122.75C370.34 92.04 444.91 82.53 482.13 141.44C482.91 142.69 483.2 143.66 483 145.34L480.44 175.19C480.26 177.25 480.27 177 482.44 177.28L487.94 177.75C489.95 177.92 490.06 178.06 490.32 175.97L498.54 115.44C498.84 113.19 498.82 113.4 501.25 113.44L550.04 115.16C551.51 115.22 551.86 115.1 552.63 116.53L568.82 146.88C570.44 149.93 570.62 150.75 570.63 146.81L571.88 117.72C571.98 115.49 572.16 115.8 574.47 115.88L627.1 116.69C628.57 116.71 629.77 116.71 631.19 116.44C670.51 111.33 710.98 101.69 743.85 121.88C745.3 122.78 745.47 123.16 745.88 121L748.79 106.97C749.17 105.12 749.14 105.01 751.16 104.84L822.6 96.72C824.57 96.49 824.64 96.19 825.13 98.38L829.75 116.91C830.65 120.47 830.62 120.69 830.85 116.88L832.41 96.53C832.58 94.37 832.59 94.57 834.94 94.03L902.38 80.91C904.71 80.45 904.61 80.3 904.44 82.78L895.6 213.09C895.61 214.42 895.19 215.04 896.66 215.03L898.47 214.91C899.88 214.81 899.53 214.39 899.88 213L921.79 77.06C922.13 74.94 922.09 74.8 924.35 74.25L997.94 56.25C1000.02 55.74 1000.51 55.09 1000.13 57.56L968.6 234.13C968.09 236.97 968.32 236.47 971.07 235.78L1012.88 225.84C1015.24 225.28 1015.58 224.71 1015.04 227.41L991.69 342.38C991.11 345.25 991.15 345.21 987.97 345.31L883.22 348.28C880.61 348.35 880.65 348.43 880.97 345.78L883.04 327.5C883.12 326.76 883.2 326.11 883.13 325.28L882.88 320.81C882.77 318.91 882.82 318.93 880.91 319.34L870.22 321.47C868.31 321.85 868.1 321.75 868.57 323.72L870.88 334.91C871.33 337.11 871.44 336.98 869.1 337.44L795.35 348.56C792.84 348.94 792.55 349.29 792.25 346.59L787.44 311.69C786.88 307.58 786.94 307.48 786.38 311.66L780.44 352.09C780.07 354.66 780.16 354.4 777.29 354.16L715 349.09C713.73 349 714.17 348.09 712.13 348.25C692.3 351.04 672.35 354.52 645.13 347.72C642.98 347.17 642.75 346.89 642.57 344.22L638.47 288.34C638.06 284.28 637.91 281.66 637.82 281.38C637.74 281.52 637.69 283.64 637.54 288.41L635.97 350.41C635.9 353.16 636.13 353.15 633.13 353.13L575.29 352.75C573.47 352.73 573.25 352.77 572.19 351.06L563.94 337C562.73 334.93 562.89 334.62 562.44 337.22L560.35 351.03C560.08 352.79 560.25 352.94 558.32 352.94L474 353.34C472.14 353.35 471.88 353.62 472.04 351.59L473.5 329.13C473.64 327.13 473.52 327.4 471.47 327.19C465.85 326.79 460.63 325.82 456.1 323.97C454.82 323.42 454.33 323.02 453.07 324.22C413.38 361.39 374.73 362.8 336.91 334.78C335.67 333.86 335.21 333.49 333.16 333.91L302.72 338.91C299.98 339.36 299.77 339.69 299.35 336.75L291.13 292.53C290.41 288.66 290.5 288.52 289.79 292.5L287.72 303.13C287.35 305.03 287.27 304.95 285.25 305.28L282.63 305.59C280.35 305.88 280.82 305.74 281.79 307.91L288.1 319.78C289.22 321.88 289.45 321.78 287.07 322.69L212 350.16C210.31 350.78 210.21 351.11 209.35 349.31L201.91 333.78C200.7 331.26 200.69 330.75 200.04 333.78L198.32 340.47C197.78 342.55 197.76 342.43 195.54 342.34C168.98 340.33 140.72 340.89 116.1 335.97C114.57 335.66 114.41 335.69 115.29 334.03L120.19 324.78C122.19 321.02 121.28 322.27 118.29 323.84C97.43 335.53 78.65 344.95 67.79 345.88C64.9 346.11 64.16 345.88 63.69 342.44L35.04 166.91C34.68 164.74 34.42 164.59 32.41 164.19L25.41 162.88C23.5 162.52 23.51 162.58 23.1 160.5L1.66 15.19C1.38 13.33 1.3 13.38 3.22 13.13C7.1 12.73 11.01 12.52 14.91 12.5C52.64 12.26 91.61 29.33 132.1 65.09ZM100.13 181.56L102.88 202.44C103.17 205.01 103.63 204.91 105.29 203.69C111.18 199.32 111.38 185.23 101.85 180.28C101.1 179.91 100.63 179.68 100.35 179.66C99.88 179.62 99.95 180.16 100.13 181.56Z"
            />
            <motion.path 
              variants={DragonBallFillVariants}
              initial="initial"
              animate="animate"
              id="DB-Stroke"
              fill-rule="evenodd"
              d="M132.1 65.09C134.16 66.92 134.2 66.83 134.38 63.78L135.44 49.09C135.61 46.73 135.63 46.59 137.97 46.25C181.6 40.4 215.33 57.52 244.25 85.72C245.56 87 245.72 87.59 246.19 85.22L246.91 81.69C247.31 79.68 247.24 79.81 249.41 80.28L317.54 93.53C320.02 94.02 320.14 94.18 320.85 96.81L328.04 121.72C328.81 124.41 328.7 124.43 330.85 122.75C370.34 92.04 444.91 82.53 482.13 141.44C482.91 142.69 483.2 143.66 483 145.34L480.44 175.19C480.26 177.25 480.27 177 482.44 177.28L487.94 177.75C489.95 177.92 490.06 178.06 490.32 175.97L498.54 115.44C498.84 113.19 498.82 113.4 501.25 113.44L550.04 115.16C551.51 115.22 551.86 115.1 552.63 116.53L568.82 146.88C570.44 149.93 570.62 150.75 570.63 146.81L571.88 117.72C571.98 115.49 572.16 115.8 574.47 115.88L627.1 116.69C628.57 116.71 629.77 116.71 631.19 116.44C670.51 111.33 710.98 101.69 743.85 121.88C745.3 122.78 745.47 123.16 745.88 121L748.79 106.97C749.17 105.12 749.14 105.01 751.16 104.84L822.6 96.72C824.57 96.49 824.64 96.19 825.13 98.38L829.75 116.91C830.65 120.47 830.62 120.69 830.85 116.88L832.41 96.53C832.58 94.37 832.59 94.57 834.94 94.03L902.38 80.91C904.71 80.45 904.61 80.3 904.44 82.78L895.6 213.09C895.61 214.42 895.19 215.04 896.66 215.03L898.47 214.91C899.88 214.81 899.53 214.39 899.88 213L921.79 77.06C922.13 74.94 922.09 74.8 924.35 74.25L997.94 56.25C1000.02 55.74 1000.51 55.09 1000.13 57.56L968.6 234.13C968.09 236.97 968.32 236.47 971.07 235.78L1012.88 225.84C1015.24 225.28 1015.58 224.71 1015.04 227.41L991.69 342.38C991.11 345.25 991.15 345.21 987.97 345.31L883.22 348.28C880.61 348.35 880.65 348.43 880.97 345.78L883.04 327.5C883.12 326.76 883.2 326.11 883.13 325.28L882.88 320.81C882.77 318.91 882.82 318.93 880.91 319.34L870.22 321.47C868.31 321.85 868.1 321.75 868.57 323.72L870.88 334.91C871.33 337.11 871.44 336.98 869.1 337.44L795.35 348.56C792.84 348.94 792.55 349.29 792.25 346.59L787.44 311.69C786.88 307.58 786.94 307.48 786.38 311.66L780.44 352.09C780.07 354.66 780.16 354.4 777.29 354.16L715 349.09C713.73 349 714.17 348.09 712.13 348.25C692.3 351.04 672.35 354.52 645.13 347.72C642.98 347.17 642.75 346.89 642.57 344.22L638.47 288.34C638.06 284.28 637.91 281.66 637.82 281.38C637.74 281.52 637.69 283.64 637.54 288.41L635.97 350.41C635.9 353.16 636.13 353.15 633.13 353.13L575.29 352.75C573.47 352.73 573.25 352.77 572.19 351.06L563.94 337C562.73 334.93 562.89 334.62 562.44 337.22L560.35 351.03C560.08 352.79 560.25 352.94 558.32 352.94L474 353.34C472.14 353.35 471.88 353.62 472.04 351.59L473.5 329.13C473.64 327.13 473.52 327.4 471.47 327.19C465.85 326.79 460.63 325.82 456.1 323.97C454.82 323.42 454.33 323.02 453.07 324.22C413.38 361.39 374.73 362.8 336.91 334.78C335.67 333.86 335.21 333.49 333.16 333.91L302.72 338.91C299.98 339.36 299.77 339.69 299.35 336.75L291.13 292.53C290.41 288.66 290.5 288.52 289.79 292.5L287.72 303.13C287.35 305.03 287.27 304.95 285.25 305.28L282.63 305.59C280.35 305.88 280.82 305.74 281.79 307.91L288.1 319.78C289.22 321.88 289.45 321.78 287.07 322.69L212 350.16C210.31 350.78 210.21 351.11 209.35 349.31L201.91 333.78C200.7 331.26 200.69 330.75 200.04 333.78L198.32 340.47C197.78 342.55 197.76 342.43 195.54 342.34C168.98 340.33 140.72 340.89 116.1 335.97C114.57 335.66 114.41 335.69 115.29 334.03L120.19 324.78C122.19 321.02 121.28 322.27 118.29 323.84C97.43 335.53 78.65 344.95 67.79 345.88C64.9 346.11 64.16 345.88 63.69 342.44L35.04 166.91C34.68 164.74 34.42 164.59 32.41 164.19L25.41 162.88C23.5 162.52 23.51 162.58 23.1 160.5L1.66 15.19C1.38 13.33 1.3 13.38 3.22 13.13C7.1 12.73 11.01 12.52 14.91 12.5C52.64 12.26 91.61 29.33 132.1 65.09ZM100.13 181.56L102.88 202.44C103.17 205.01 103.63 204.91 105.29 203.69C111.18 199.32 111.38 185.23 101.85 180.28C101.1 179.91 100.63 179.68 100.35 179.66C99.88 179.62 99.95 180.16 100.13 181.56Z"
            />
            

            <motion.path 
              id="D-Fill"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              fill-rule="evenodd"
              class="shp2"
              d="M20.91 30.72C21.2 30.71 21.65 30.79 22.29 30.81C203.29 43.42 210.42 292.67 80.16 325.13C78.24 325.54 77.82 326.09 77.44 323.59L51.38 154.66C51.1 152.87 50.98 152.75 49.25 152.34L38.44 149.88C36.69 149.47 36.45 149.5 36.25 147.59L20.47 32.16C20.36 31.01 20.42 30.74 20.91 30.72L20.91 30.72ZM83.47 159.53L94.54 228.31C94.86 230.31 94.88 230.41 96.82 229.81C141.72 218.2 134.9 158.79 85.35 157.78C84.95 157.78 84.62 157.75 84.35 157.75C83.53 157.75 83.26 157.95 83.47 159.53Z"
            />           
            
            <motion.path
              id="R-Fill"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              fill-rule="evenodd"
              class="shp2"
              d="M152.85 60.72C248.29 63.19 299.62 177.81 216.69 228.53C215.1 229.5 215.16 229.62 216.29 231.47L265.79 310.03C267.25 312.35 267.4 312.18 264.72 313.19L218 329.84C215.95 330.58 216.04 330.58 215.1 328.53L191.66 273.22C190.54 270.58 190.71 270.41 190.32 273.38L184.6 326.91C184.41 328.66 184.49 328.48 182.57 328.34L139.29 324.56C137.38 324.4 137.27 324.55 137.38 322.5L138.07 310.81C138.16 309.25 138.41 308.79 139.57 307.63C189.16 255.39 208.75 169.5 150.41 82.88C149.61 81.6 149.43 81.12 149.5 79.41L150.69 62.69C150.8 61.19 150.83 60.79 151.69 60.72C151.98 60.7 152.34 60.7 152.85 60.72ZM200.79 150.25L197.54 190.97C197.25 193.35 197.84 193.1 199.69 192.94C221.57 190.49 226.5 157.57 202.75 149.19C202.12 148.96 201.72 148.78 201.44 148.75C200.97 148.71 200.88 149.08 200.79 150.25Z"
            />

            <motion.path
              id="A-Fill"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              fill-rule="evenodd"
              class="shp2"
              d="M262.38 98.75L309.63 109L360.1 312.88C360.53 314.84 360.75 314.98 358.66 315.25L313.04 322.06C311.36 322.31 311.43 322.19 311.19 320.63L302.29 256.16C302.02 254.22 301.91 253.98 300.13 254L281.38 254.25C279.62 254.28 279.55 254.2 279.38 256.03L275.66 288.16C275.43 289.72 275.69 289.87 273.91 289.91L271.66 289.91C270.4 289.91 270.4 289.67 269.6 288.56L241.07 244C240.36 242.89 240.07 242.57 240.32 241.06L241.66 231.84C241.83 230.7 242.04 230.2 242.82 229.28C268.72 198.77 290.61 166.23 258.94 106.56C258.52 105.76 258.39 105.35 258.75 104.31L260.32 99.69C260.58 98.84 260.69 98.54 261.13 98.53C261.4 98.53 261.79 98.62 262.38 98.75ZM288.04 161.88L283 207.63C282.85 209.48 282.76 209.38 284.5 209.53L294.25 210.41C296.33 210.55 296.01 210.5 295.79 208.63L288.88 161.91C288.64 160.15 288.51 159.26 288.41 159.25C288.32 159.24 288.23 160.1 288.04 161.88Z"
            />
            <motion.path
              id="G-Top-Fill"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              class="shp2"
              d="M336.28 144.38C363.24 109.62 433.77 105.36 467.67 144.96C469.41 146.83 469.29 147.89 469.18 149.89L467.09 175.7C466.84 178.39 466.72 178.82 464.41 179.36C454.45 181.66 446.72 184.98 437.4 191.73C434.88 193.6 433.72 193.61 431.2 191.3C405.68 167.87 355.18 182.62 355.71 228.52C355.79 232.7 356.19 233.77 354.9 228.54L335.25 148.79C334.72 146.29 335.19 145.7 336.28 144.38Z"
            />
            <motion.path
              id="G-Mid-Fill"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              class="shp2"
              d="M382.09 247.81C381.1 237.55 381.18 227.29 381.95 217.04C382.12 214.53 382.88 214.65 384.74 214.66L412.24 214.84C414.69 214.9 414.23 216 413.61 217.68C410.2 226.65 406.16 234.62 405.55 247.97C405.42 250.26 405.15 250.69 403.38 250.77C397.18 251.06 390.98 251.57 384.78 250.69C383.02 250.48 382.3 249.83 382.09 247.81Z"
            />
            <motion.path
              id="G-Bottom-Fill"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              class="shp2"
              d="M359.79 250.03C358.94 246.4 358.95 246.6 360.73 249.61C369.51 263.83 380.86 274.34 403.65 268.4C405.63 267.86 405.94 267.79 406.56 270.09C411.96 288.1 421.49 302.67 435.16 313.8C436.87 315.2 437.87 315.5 435.79 317.36C414.95 336.72 392.33 345.37 366.06 332.19C364.09 331.2 363.25 331.03 366.01 330.19L375.49 327.4C377.51 326.74 377.75 326.61 377.12 323.96L359.79 250.03L359.79 250.03Z"
            />
            <motion.path
              id="O-Fill"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              class="shp3"
              d="M539.53 252.76C539.53 268.65 533.28 283.89 522.15 295.12C511.02 306.36 495.91 312.68 480.17 312.68C464.42 312.68 449.32 306.36 438.18 295.12C427.05 283.89 420.8 268.65 420.81 252.76C420.8 236.87 427.05 221.63 438.18 210.39C449.32 199.15 464.42 192.84 480.17 192.84C495.91 192.84 511.02 199.15 522.15 210.39C533.28 221.63 539.53 236.87 539.53 252.76L539.53 252.76Z"
            />
            <motion.path
              id="O-Star"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              class="shp4"
              d="M487.77 242.77L511.72 242.77L492.14 257.35L499.85 280.48L479.85 266.73L460.89 280.48L467.35 257.77L447.56 242.98L472.14 242.77L479.85 219.65L487.77 242.77Z"
            />
            <motion.path 
              id="N-Fill"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              class="shp2"
              d="M506.45 178.58L510.87 130.52C511.05 128.36 512.13 127.37 514.11 127.57L542.18 128.4C544.43 128.59 544.27 128.98 545.11 130.71L580.72 204C582.07 206.82 582 207.13 582.17 203.89L585.87 133.54C586.02 130.88 586.07 131.11 588.54 131.19L623.53 132.36C626.03 132.41 625.77 132.6 625.76 134.94L624.32 336.79C624.27 338.96 624.3 338.82 622.28 338.83L583.37 338.96C581.74 338.93 581.75 338.7 581.1 337.45L555.51 287.81C554.58 285.93 554.65 285.85 554.41 287.94L548.76 337.96C548.51 339.78 548.26 339.55 546.59 339.57L490.5 339.98C488.26 339.96 488.31 340.13 488.45 338.08L488.92 330.2C489.13 327.31 489.96 327.45 492.14 326.9C575.8 306.08 571.81 210.45 508.3 181.87C506.31 180.92 506.31 180.69 506.45 178.58Z"
            />
            
            <motion.path
              id="B-Fill"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              fill-rule="evenodd"
              class="shp1"
              d="M697.04 126C773.61 125.43 782.85 226.05 723.19 244.41C719.59 245.51 718.74 245.22 723.16 246.59C764.59 261.76 772.89 339.29 682.94 336.16L659.79 335.38C657.62 335.28 657.31 335.49 657.1 333.19L645.16 206.94C644.93 204.54 644.95 204.47 642.5 204.38L639.82 204.25C637.52 204.16 637.63 204.27 637.63 201.88L639.25 134.22C639.34 130.71 639.3 131.07 643.07 130.59L689.41 126.41C692.02 126.17 694.57 126.02 697.04 126L697.04 126ZM685.69 186.63L686.69 214.59C686.76 216.24 686.86 216.27 688.54 216.44C709.69 217.77 712.83 187.33 688.22 184.34C687.68 184.29 687.23 184.23 686.88 184.22C685.83 184.18 685.59 184.56 685.69 186.63ZM689.13 268.09L689.13 289.19C689.11 291.22 689.36 291.18 690.94 291.44C708.55 293.81 709.77 268.39 691.1 266.47C690.63 266.41 690.28 266.35 690 266.34C689.19 266.33 689.13 266.67 689.13 268.09Z"
            />
            <motion.path
              id="A-Fill"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              fill-rule="evenodd"
              class="shp1"
              d="M814.38 116.13L853.91 322.03C854.44 324.67 854.55 324.64 851.97 325.06L809.16 332.09C805.72 332.58 805.83 332.93 805.44 329.69L798.44 270.69C798.15 267.98 798.13 268.12 795.57 268.16L780.44 268.38C778 268.41 778.12 268.34 777.85 270.56L770.16 334.5C769.83 337.14 769.89 337.05 767.38 336.91L751.19 336C748.44 335.91 749.36 335.39 750.63 333.88C778.42 300.42 770.59 274.75 753 251.22C751.26 248.97 751.48 248.83 753.22 247.28C773.65 228.64 792.55 181.89 760.85 138.16C759.74 136.76 759.68 136.21 759.91 134.5L761.6 122.19C761.98 119.57 762.38 119.8 764.85 119.53L811.75 114.47C812.29 114.43 812.69 114.39 813 114.38C813.95 114.34 814.08 114.58 814.38 116.13ZM788.22 190.91L784.29 224.28C784 226.96 783.88 226.79 786.47 227L792.07 227.31C794.6 227.46 794.3 227.35 793.97 225L789.29 190.94C788.99 188.65 788.85 187.5 788.72 187.5C788.6 187.5 788.49 188.62 788.22 190.91Z"
            />
            <motion.path
              id="L1-Fill"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              class="shp1"
              d="M849.59 108.28L885.5 100.69C889.48 99.89 889.46 99.49 889.19 103.5L880.82 230.21C880.72 232.58 880.72 232.35 882.96 232.06L930.05 225.93C932.13 225.72 931.92 225.75 931.61 227.74L920.58 298.63C920.2 301.06 919.8 300.69 917.55 300.96L868.84 305.87C866.55 306.08 866.56 306.32 866.13 304.25L841.15 182.53C840.76 180.73 840.77 179.54 840.85 178.1L845.8 112.89C846.11 109.05 846.07 109.03 849.59 108.28L849.59 108.28Z"
            />
            <motion.path
              id="L2-Fill"
              variants={LetterFillVariants}
              initial="initial"
              animate="animate"
              class="shp1"
              d="M937.16 87.75L980.13 77.86C982.24 77.35 982.4 77.01 982.03 79.22L952.73 253.82C952.26 256.21 952.4 256.09 954.81 255.55L995.57 246.42C997.95 245.94 998.16 245.43 997.63 247.99L981.49 328.31C981.1 330.44 980.88 330.28 978.83 330.32L899.39 331.9C897.24 331.88 897.32 332.07 897.74 330.05L899.83 319.87C900.31 317.76 900.34 317.76 902.35 317.5L930.22 313.88C932.37 313.59 932.35 313.6 932.66 311.61L948.7 209.8C949.09 207.35 948.91 207.82 946.69 208.13L918.74 212.43C916.25 212.87 916.51 212.79 916.86 210.47L934.97 90.13C935.32 88.19 935.38 88.17 937.16 87.75L937.16 87.75Z"
            />
          </g>
        </g>
      </g>
    </svg>
  )
};

export default DragonBall;

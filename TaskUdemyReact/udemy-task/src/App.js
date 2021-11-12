import Car from "./car/Car";
import {Component} from "react";
import style from './App.module.css'

class App extends Component {

  state = {
    cars: [
      {
        name: 'Audi',
        year: '2018',
        image: 'https://img.drive.ru/i/0/5c77ca4cec05c40f4c00011c.jpeg',
        href: 'https://ru.wikipedia.org/wiki/Audi_R8'
      },
      {
        name: 'BMW',
        year: '2020',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/'
            + '2wCEAAoHCBUVFBgVFRUYGRgaGxsdGxsbHBsdIx0bGhoZGhsYHR0fIy0kGx0qIRoZJTclKi4zNDU0GyM6PzozPi00NDEBCwsLEA8QGhISGjMhISEzNDMzMzMzMzMzMzE1MzUzMzMzMzEzMzMzMzMzPjMxMzMzMzMzMzM+MzEzMzMzPjMzM//'
            + 'AABEIALQBFwMBIgACEQEDEQH/'
            + 'xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/'
            + 'xABFEAABAgMFBAcFBQYGAQUAAAABAhEAAyEEEjFBYQVRcYEGEyIykaGxQmLB0fAUUnKC4QcWI5Ki8RUzQ7LC0kQ0U5Oj4v/'
            + 'EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/'
            + '8QAIBEBAQEAAgIDAQEBAAAAAAAAAAERAhIhMQNBUYFhMv'
            + '/aAAwDAQACEQMRAD8A8jTByhy48okJlNmODfCCoc4gcw0Y1vA5JIxBiUEIVgAOX0IRUv3daHzpHLUGoQ4yUPJ4ipC7IhJoCcKhtznCJVmSnCo1IMUkyesEk+Z3coai0lX+mDyHyhhq9tCybwF1syU3QX3AxnJtpWpxeN0+y5Iy38IIqasgoDBJxSMH58vCGGURlVt31lCTC+TEBs4mIWpaSkuWoH0y+tYYhIBDhgd3mdYkTJgT3WCfhm8LScUGfKILiGdWTVsNYnItA93gfgCIFOtRwFB9aUhp1RwhQ+nhyF7w8IpRViSebw0oigpmQ9FpIwP1yiM8I8MNWiLQWeh5RIRalb67oqJa4kIL4UP1nGbxWclsnakwFjRO76xid'
            + '/iMslymowKWikRbFChx1zh0y1XvZSNQG8WjF4tzl'
            + '/o22lIWQtBvUYghjpxzitTo4iYlG/OHFAjU8M2b5AVeIbLX114wFKG3RNaGqlPEUiCPujlBLo1HnAuqbAtBEFQwrzi5DaclA3+MPEgb0+IhMcR5wpSBiw4RnGtMtMggb4gpiwSg4kU1jlSkK3g6'
            + '/OLuGaiprCmWMDnCTkFJAZ9d0FTUfWMQiKpG+FQMjTdBloB4jXGBqW1FChwMXUwTqaax0NBUKd4ekJDyZApipqQ7ggvVh4w1EyaK36cvSEnT0gM946PAFFaqM2sbxzWPWOxBHoQYhWy03nSBz9awNMkZvxr6b4cMqc4Hs1Mpkuc9cvoQ5KA1aQdKXFWbhh4QApILc6w0zCAAMRXeNIcpbwJUzKBXjFw09Sqw6pgDwVC90LElcURydYc75Q5KfoQAXh96CGWId9mhqhBcItocqS2kN6vQQQgUIeiY2cJd0hUiAMlQVnEyVZ1Aua7j+giJJAJZVNYtpMhBSBeD7nxzyjPKtSGpScy8OTKO'
            + '/wBYlpl0weHiSchGNdOqGmz1+EEKNIIpB+jHBJ1hpgd5shArwyAiZ1LwougVLaM8NMA6pLOS3qdIahAdyIcpV4ufCHqQ1Q8Vm0q5bh3iFE8zabvjEAnjBXFmYiu9'
            + '/JoFLDK3QVqn65+cchPygspFozHhv4QFaSKEONYkBDUyhxS+Iccgf7xlpCTJbultDCwcSa'
            + '/OFi6mKgMDT600hOsU7AOTv9YcqGIW2IDx0cRCABi+u+HlQo0BVMeOaDQy57fHWI0ybHKQTC9TqIJ7RwIcpEHEqF6o6RdTAAmHhMPMsiFBhphpTCEQVuEEQgbomriML2UOCznEzqQ1DXdDeqiaYilZhQp4MpEMMuLqYbd0h6ZcPlLbJ4OFkVYRNXA5UoiLzYchK5h6w5U1ODxUqmggMQNC'
            + '/rDrPaFpJNGyffkxiXbFmRsZ9gQkPfVpmIr581KHBUKfXzijXtOYRVWEDVPKgXzqddPKMdK6d4tU2ozTdRTVhXQaxKkTbnZIH5gx8ozkmYQ4eJaLYrBRJG6oI1GRi3iz3Xq5q6OhBG8fVfGKyaXJjpW0B3SQw4w'
            + '/rAcKjTKEmFukTLADkiGC0+yPOOtKklLpU53vlnTCKuZMILRqTWbcWU+bkTEYqzy1iGJ+RNYIicMIYaItT0GYOEPkq7L8mfPGOCzQE4YcOEcFjdT6r9b4ipKZwI13ZxyUajnDUpSGujnD1mgziVqUhlq+q+UdCBZAYR0MXYzvWPhCQiBBgjTnHWuJjZQVCIfdhQkbozqyB3YegQS6RCJEVTUgQqk7h6wqjvb0giZw4RAPq1YXSeFfTCGqQBi44iDlYeFJyehgI6JYJ+vhElEkfJt8MTdzD8yD6xyZST3FsdyvmPlAOVJq1QdITqq95'
            + '/qmsMWJicWI3g84WUo'
            + '/TQDlIxrhDCilPWCKWc2jkFJzETyGhDYj0jlsa1HLCCXqs9OENXKIqK6HPlFSo6y2Ha30hUTN1NPrGHiVnWCCXpFMAAIypwh5mQ9Tg09YaEKVS6TnQebDKCBLVrjCJXpD1y2GTQkrw84DhNf6P0IkWa0Ed2n1hvgakCHolpiVpKmAKqCAdBQ8YDMlEpq3EQ6+AKExFmTa0D'
            + '/XnEikTZzj6QKaLuZhyrSqo8h8YCV0a6DGprNwZE1yO1EmVNLfPTeM8IgpF4UDHSCBRocacIlIsQsgMaOfCHIW4u10iNfKm5ZM0HQSnJy3GJWp5GKSc6ekdHS549oR0RVQhGkFCRziVgMIahSTny13RdZwEyxnQw5MvHfD1qDw5KdzecQIJX9'
            + '/1hpllOsHRSHKW4Y+cXTERFeUIZWESys4Q0As1M4aYiLR4wMvnB1DfHKGLmNMgJJhUqg1nssyYsS5aFLWcEpBL68NcBF9I2XKlFImvPnK7siU6q1xKKzOCGTQ9s4Qk0txU2CwTJpKZaFKbvHAJ/EsslHMiJsjZSFTOqTfnzM0WdF9su1MUwSAcSARG2sPRO02hINsX9lkDu2eXdvEbi3ZQ/Ak5h6xqrImRZZYl2eWmWnTFRwdSjVR1MdOPxud+RjrB+zcKF6esyfdSsTFn8RACByvcYdO6E2GW7zJqjqpPwRGonLWvO7rnEL7IgAv2ic846ThxjnedZyX0YsRLBKz+dXwgiuiVm'
            + '/9rxmL+caBEst2QwgM0tieUbzj+J2v6ox0Rsv3fBa/+0ER0KkH2WH4l/OL+zWcmqqDdE1UwJEZsn4st'
            + '/Wb/c6QkdwH80z/ALiJNj6IWS4Zs2WlKAHHbmBwMVF10T6xbWQ9Ysj2E97XcnnnpxEVu19pidM6tKgEIr+IoIBI91JIA1c5CGT8WWjS+qPZs9klJSMygAnU1Td31JVWoEKvZiiO1LlF8ipX'
            + '/SCWe0AAABtzRPQomuETDaz9r6LylitlQ++Wpj4qUG8Ize1OhktLlC5iDuWhSxiAwIAWupHdSrGPSkzDhAtopvSyWokufwmigdGJPIRLxlWcq8TtOwpqAVBpiASCuWq+EkZLaqDooCICbNQ1H18Yv+mQmSrUpSFlKmSpCkdlSQpwUBSS5AUlTJOTM0V0jbSVkC1y0qCsJqBcXQ1vMClTbil9avHO8fx0nL9QRJp8IJLQlmMX6NlomC9Z1pmPhLUyJhcOwF66s'
            + '/gUYp7ZZVIJStBQoeyoEHk8c7rcRQGU6YNdcMQPSIq0kb6QdEx8X+tIlWDWdA9kF+Pxzh7F93GBoWCaKbLX1jusLsQ8RR0oJx8RHQ1M0b7o1w8oSHkdfNQ0BEkOCBFstaVCrEfWBiHMRVgT4CNSs1HOsORTCDhChCdWd0VA+s0eE67TzghlconWXYE+ZUJCU'
            + '/eWbo5PjDrE7VWGefu+cILScx5xokdGD7U0flQT5qKfSCK6NyqgKWS2JZn4AD1i9DuzkjtqCSUoBxUtTJGpO7g5jQDoxL6vrV2m6hnviWLqhR+rKlgq'
            + '/GQEg0JekVlrkpkTEgos68wV9YQC7MpBWQcdxbEtE+TteYJvXTJlkmLBFwTCJiJZFApCETGJ3FQJGTRZxiXlWi2JsCbORdkI+y2UtemrDzJorVKVAFQzBWEoD9lLh42OzNnWexpIkI7au'
            + '/MUby1nepZqeAppGItXSa3TB/6qzoL5Spnqpx5RB/xG3n/zZBOktb8glEdZkc7LXosxS11JYQO6Bh4x58+0li99rDHeicj/AHpTA1I2kP8Ayga1c+YupMa7M9HoClPHCVmaRiJNn2iO0bWw33Bd/mWwiWiy2tbXrcok'
            + '/cQlXhcSv1h2OrTzp4HZHgPjDJcit4s+UQbD0XtBIKrTOb3uqR5BCleIEaaVsVAABWst7xc8TDTFatd0RVz1qWoITVSiwFan4ABydBGuOzpYbsgjMqvK+Mcqxyh/po43Ew0xm9s2gWeUJMsm+oF1ZhPtr/Eo9lOp92M9ZrGpKpa1C7eJQzFkgpJSP6POL'
            + '/8AwKZOWZwUhCZjKQzuEex2Si6Oyx4qMR7emVKDzrQFBBdkoWCSn377PXIDNtJqqa27fVJWqWiUtd03b6WuuwJZyHZyKZpMMl9KLRlZpqmxZJfzVTwh2wtnzbbMXNXMmy7MKS0oPVlR3hvZH3sSYvVdB7Mqi5k9Y1mrPqTE8teA+ju2Zk9akqlKRdS5vKSVBywCgkMH7TOx7JpnGiJBSQo0IIPAhjDtl7GsshARLkpCdRec7yVO51MWKZcvKUgflT8oqY8T6UbMnTLUtQkzCCEgkIUylJloBWCzGpI'
            + '/JFbO2en7GSoMv7QOyGK0ouEK7DuPZNWDgR74syxjcT/KIrLZs6zKWlJX1a1uUhKgygGchJegcYUqImK+fSFSlkyr5RTvouu4qClyKFxjVouthJ2lav4dnK1pRiFlJQjR5nZT+EV0j1S39EZahS0LG8XQX0xifs6wpkS0y5YupT4knFSjmo74dTXmM'
            + '/o/aQSJ0qSVAVCRcUC1KgpBGrRUWjZJSQlaFJOVR4guxj3OdIlz03ZgZQ7qxiPmNIym0tnBKlS5gCrp9Q4IOVCIxy4tTm81OzVDJQ3OH5PHIkLBbwN0ZZHcY1U/ZwQaKceYhv2Yb45WV0lZpVhWe8oEa5fWjx0apNkBDvT63vHRMXVKnY6RgC3EwQWMgBOQqA9AS3J6DwjWIsaMGfcamBqsCd3KsXKnhljZSMvSJEjZxmqCZaSScXy1OkXVpkoQHWpKQSzmgGfgACTwOEbDo'
            + '/siYgBcsIAIdK1dp3FFBKTUsc6V0jXHjazbFbsfoSJSesmqQgjFa2p+FJLJ5l4HtKZZk0lrXMX94gJT5hzww1jRWno8JhvT7RNWdAlIHAVA5Qsno5ZUYoWv8Sz/AMWjrI56w/aWQBeUckpHoBUwVXRq2WhLJmIs0s4qU6pih7qE9wfiIVoI3dmtkiXeRIlpvBwQhNXBAZSsuJOUTyp8ovX9TXntm/Z7ZJZvTlT7QdwlpQk'
            + '/ypvf1RYjorZ1Ul7Ps6AKPMSFHiwfzMa4pO4QhQv+wiySHlm7P0FsoLrlSeCZctPwPrFzK2VZpabstARqkJJ5OCB4RJXKPtE84rZu1LKhV0z5V4YgzEOOId4eDyDtDYcuYHExZUfaWpSykaJDA+IbWI0roxJHevr'
            + '/ABKuj+VLesSpm37Mkt1ilH3JcxY/pQR4mBTuk0pPsTThRkINXbsrWk1Y5ZQ8KlSdkyUd2Uga3QT'
            + '/ADKcxKUs74rE7VmLR1iJDIIJCpk2WigdyySsgBjlBrBaJkyWFzJaJZLskKUvs+yokpQQSKsUuHD1oGiRfUIrNs7fl2dJUsjiTdA0J36AEx22Lb1UtUwqZgcsGqS1XYZZ4Zx5NtO3GbME2beIJCUJyTePIXjmf0iWjbyf2mSFKa8hsqLR'
            + '/UoMObRb/wCNpmAJIuoU14gv2cSzDAilN8eUrFmmgpISGHeSwUNcXYe8Gg+wrWuzThZ1qvIV/lq3E+zo5oRkW3xNHsItktTtMAGT05MWw+UU9q2dZ1d+YSNya/AxSrtJSx+q09WgMzaOsNMamzWyRKQES0qIGGHHf8Iavb'
            + '/3UAcS8Y9Vv1gKrYYarUzttzD7bcGH6xAn7RUe8sniSYz67XD5BUsxBaJnuaRq+il5d+8SUoAZ8rxJLfyxlbNZ2DmLqwbSMqzrSmipiu97gAFOb146RYL5c5DsFJfMOH8IVaqYiMaZghlr2j1UmYauQyeJhqYD0m6VzCpUqzC82JBKRxURVjkHDipNQIy9g6VzEL6u0oCXPf7VMqgkgp1EQbVbLqkyge0pSXURQFRYrIzzpuiHMCpgUldRfWlCmqCnMt7OAPGA3E+1OEscVAeJYwfqzv8AT5xmejtqK5ctKnvS13S+l1h4U5Rt0F'
            + '/ZI/JHLlHSVXqCh9frHRbJR7hbh8o6Ji64z2ci7vyLNxhFWhQIYpHhX6r4RyrUlWKHOOG'
            + '/Kg5QBc5KjSWOXPJsfnFDk7NE9aVrUpaFSpss3U3hLKlJ7ZAN5QN0JJSCzB84rrWiZIsqpcubfXISVhKFS1iZK6xV5TspQuhQLGoukViFZ9vrs19Mtd1YWTLDPVN5a0E7lBN3853xcy+lFjnETlS+rmsT1iUg49k3wCOsS9CFA8qGOs9ObFDprN+5'
            + '/Un4oaLTYn7Qp6ZqEkEpUoJYqS3aoD2UJepGP6gi9kbPnLCUJRfWfZXNkp3uxTMQgY0eJK/2fJllC6IN8BKl2lJF8EkJA6kXldk9lxgd0WyyS37TdP2l+0W0rs8uclKUJUtSFJQS7gEggqBGANCk40bPPTenk9R9v+aX8JQjWfubKRZlSVzJa0LX1iVKmCWZZCL5uL7YWLjmoFC'
            + '/CuX+z2SlryyHBUL1plh0pSlaiP4WASpKidygc4zqs+enE/3v/k'
            + '//ADFlsHpPOmLXMmKPVSk3l3ilV4lwlANwKSTUukggJNYsE9D7Ag3Zq0BVCypsxVDUK7MtAUCKuDFmjY2yzL6ubaRcBfq5SFS0vTtKJKlrVQVKssIDF2PpMkKSZtnQsAlyolS7qiSBfUXJSCMTW7Uh3jUG3WlbGzqlzrOrJMy6uWr3kLmJcDdR82MTZlj2DKSVXFLYYKXM9VEAQLo1bbDa5y0SLNIs6EJCivq0rWpywCSsEDUlMBIkzJ01CETJki8gVQDL7Tkk9ybMUglwHCDhhlDJFhnzJiwZiVqcFSJNmnnDup6yaqXLcAtVUa+WbJLyKz71RyB7I5AR07pIhIZKMMP7RNA9l7CYJM0BKEVEu9fKmqOsOAD1uJcPio4RMtNorGft'
            + '/SlZBSkAPDLNtEq7wfhGtTFJ0+2iAEy6tirgllENxueEefWyyrQDNKwpKmCVDALSlE4AVIa7THEmNL0lmJm2laOsUhd0FBCVqAN5Sq3ASOywdjhGe6QTQn+DLmBcsqEzssyZhCgsAYpSxdsuTCCHKnBEuctLhS1pShWYSCVkg4jBOG8ROnSlmUlKk3VtfRUO6WLgCqQQcDmDkBEWzlEsJUpN5QcoSoslK3qpZLYAJoBzpC2a1gzHJvqUarNGat1Cck5V34DMrZItXWSETM1IB'
            + '/M1fMRCJUcBB+jUsGUlOQXMSOF8kesaqxbOlhNQKU8P0Y84DIosyzkYkI2YsxqgZfsC833Re8kvHFK8QhhvUUp8QohQ8IChkbG3xZIsqUCB2naMpHftEpJGIRemHg3Z9YrLR0isow6yZxACfCj8DegLNRvVbsDle0B3bzyFXuhnrUrNtAKMKADBhyimn9LSruy0gb1F'
            + '/RmgKNpTFmqmBySAP1gLgvr9cordvziEITvVXkCfURJkTd8VPSRdZf5v+Pzioze1LMpJTMLFK+6Qc0s430po4IyLPtk0smWkdtWIGN5a76k+UvwMTbRZJJXLUpSUIKJRWhN0re4kLWRVIdVakEg4boMxASQ6uz3Vm6UkliSkn2dxBY40IgLTYBacoH2riiPecpV5xvUXzVxhrnGG2PJSmaAhV5ICQlW8X3B0wMbJVo0Pn9GMVuJjq14fTesdEQWuj1Hjn9ecdBQztMfeSOHOkMTb3He9fOkBTZj73ieMKZBGRPEkQVlelE25PQv3wo'
            + '/0v8Yq508yipIqAogaUKSRxHoItemEgm5nVQpVmH94orbMCy7kF+04oTmoEPTSLPTF9rTY+1paJgK0qCCzlnYP2iw73ZcNrG+'
            + '/fexpUi5PXclrC0y1omoYtNBdaAok/wAQO7hTVjyuVeTgpHM/Nof1yvc/nR'
            + '/2jfLneXGS/TEmW39en2npZYVJAFoYhc09yensqSlEsOlOIQhKTuJvCqRDB0vslwyzakrSUzGPVTkKSpUpMtHaCSVAMoPShScUx5jecsbrfjR84alRAbsfzojGNa1XS7pNKn2kTJRJT1aEmij203gWKwFKDXakPFJ'
            + '/i+4K8IghR9z+dHzg1mnlC0qIQQDhfSa5OxwdidHi4HbXtDqEt6I72q'
            + '/a5Du8jvhuxdpKs81MxNWoofeSe8n4jUCJFn2GpYvGaiuJCgcc+0UxYSei6SKzQTuBSP8AtDEbuTbUrQlaC6VAEHQxHnToo9myF2UBNVylGrG+Zaj7TBIIQc8Wx3xZzl5ioOBETGgZy4srHOpFOtcFs04iCM1t61KRalKSbrFDqZN4OlNUvWlcOcJsszOvROK03gb1UpdSbrBRSBVJLByGIwjtuEC0LJSFUSwNcUJAUxoWIwNK1h9quSUJU6r80ICycf4bLmEb3IQN1I0IU5aQFqloa+FXkkOe1cUZYIIZmJ3scMQHbMCSE'
            + '/wwBcUQSpyBfSl2u/ebE4PFX9oPZJJLpuq39kkpVxAZvw6xcWFZ6pS5gqQAFdlroK8sQbxUp8OxDdRpejSmlAn78w4ke0U5N92LsW1ArdSTvIBPiaxntmzQiQgYOm8eKyVn'
            + '/d5RGtO1ZQBeYG3BVVeFUjXE5NjEVoLTtyYXTKTeIxJN1CPxK3+6HMZa37QCz/FtK5m+XJSyRoFKoeaYrLZtrrGBBCBQIBCQ3KAIt49lEtP4io+kUSzaUf6dnfcZi1K'
            + '/pTdEKhc490IR+CWgebP5xGFrWcZ0tH4Uk+qfjCdWhQ7drPC4oj/cPSIGbQdiFTFLO68VN8BEXZ1vVKVmU5p+I1iws9js79uc43JSU+Jc0iykiyJcoWpJ4v8A7naGmLKx2pK0hSS4MV'
            + '/SZfZQrco+YB+ER9ozQhN+TMKlUvhQSxDUUGAqMOHARUTdozJjBagQC7MBWo9CYCVIQBemhglCSojepgEJOhUoHkYi20KXOKaOFXRrUJAfPfXWFQslJluWLYN2gkkp5hz4xYiWkKVMdRdboQ4xbvODjUgDAVfIELnZMo3lTFEFrqQwYG4lQdsh2xzEXf2rj4RV2NSEISh0ktVjmS5bR3aD'
            + '/aBgB5vlGa3E0rf70LEdE1OLR0FWKk5/PKAlI3B3xr8YMJZNGBxq7YYb+EAXZTld+vhxgBLkh+6kPoXii2zsBEwqWk3VszAUJGZAD1wcaUMW87ZylP2rutD+sQZmx5hH+cf6YJWGtVmXLUUrBSdx9RvGoiPG3m9HlrHamkgVqzNvxpEdXRP3x4frDWerIlWTDjX5tF1srY4UCucbqWol2PE7hpifWx'
            + '/dI07Y8D8WpCfuionvpPjhhDTDJmy7GP8AUI/OPkdYCqx2Ef6ij+b9IkHokr76aaH5Yaw0dElOR1ieQJgqDNlWIYFfj8xDFzbLkJh5I83TFkOiSvvpw3em/KFPRFQxmJ8PqsEyqQ2iTkhf'
            + '/wBY/wCMKNpFI/hlaOCm8QAIu/3QU/8AmJ8PSsOT0PVnMGD4frF0yqUbdnjCYebmCJ2/P++Dy+UXP7ntjM/p/WHp6Hh'
            + '/8xXIJhplZ9drWtV9ZvKZsAOzupE9SZc5CAVKC0gpcAEXDUC64qDm7kKzYRao6Iy3rNWOQGjBxjBB0UlivWLPAgHB2whpinlbOlJqrtJ7JYhqh37WIScWA3BxjETatvCuygAJ0AAqz01YDgM8TqpfReWcStTb1k86UgqNgSQe6NKk+XEmGnV54oE4knjHCUY9JTsiUKhA3YeWEHFhlg91INGoHIrgwiadXmQsqjkfCCCwL+6rwMenfZUjAU11r9CFTKTiHbPHLTdSGr1eao2RMPsK8DBUbCmn2T4R6OqSgpLmjZEj0LiHqkpycsMwr4'
            + '/VYadXnqOjkw5HwPPwaHp6NTMz5E790eg2i4D2Axaj4Pz3hqNDH7N4jMg8AwwGr5V5xynzcbZI1eGMOjoyrNZH5TDx0VNe0vwAr5xtBMTQUHjnHIUDQDdpwAz'
            + '/AEjpbntnGQHRcZqWfD4DdEqR0eQKuskbzplGlMwA4Yc60HKvrCieliW5s7a4aekXTFInZAFWVXifjEiXs4UYKOvPOLI2hIxaugqPCp5Q'
            + '/wC0DwzYCvMQVBTYTuFMdw8Y6JwtAHdD8j6NHQHdaMHwGTtq74Z57oTrw5bHW9R2rjid8QTKX7KQHx7QMPRJJxIq79oE4FqtqYmqmfaRvFcq44sX03boH1tCMKsKHAPQvTWhiIuyDG8nhe1xcDfDjYwxJxHN'
            + '/juw0ibIYKZ4IUamoDsQR/V9axy5rd5L3tM94qQatEVdkJz3M+VONYWVZjk2LY55GmFYuiQFgYMwzCWopy747oS+Cewl2FRmKY5EhmhiJJFSHAxF4lnOIbFneHSpYooKdGILgE1Y0GB5xi'
            + '/JJbF6ik1OLOS2ooWNKuD+sNVMwoRhlTfRi++BS5b1VQO4Y17Xdd3BIDVYGusLMsagXJJBwIevIfCJx+Tjy+'
            + '/JeIxnAl3O4GmG6gwBpDZi0gEsA+GHH5QP7CoFnOIxv11wwhVWKg7QxzcepAzx15R01HLnp0D7t7Yj6/VevBy7WDUzPFx9Yw+VYC/eAI3NgN3hDF2I1qlh7w47'
            + '/poaF+0IOJxwqdfB2zJhy5oSWcgHE1P0MYGqzEMXSd2B8a13bsIGiV2iwH8rY/mpu5Q1B12oB640zGIGmOfOElzxVjn7zPruwhvUDC4fFq+PGGdVVro4XgGApuhqiLtHEjUGnCrjPSFTbZbHM'
            + '/WecKiwgu4biQctA8NNjD65BxRzi0TQi7UgnIvXAvj4PyhRakuwIH6aOKO5hq7CH9Cw+Bx8YenZweqnD1a8KtoKxdDVWpAUab8mfz5xyLWncOQ40zEcvZ4qHo1Howy54UhkqyElg5cY0Y0xFXPg1IaHqtQBfB2OH6uYUWnNJZyA5zcuQcm+qYgZkBLXncUAITV93aFOG6GdX1n8O8QLpUUk0UXACQcAXPlHP5OUnFePs1doL3Qm66WY07qmC2AIChUYtvzjk2tlssFwGxO8H2jQnUcoiTLUS18VSyTV3LY5mgA36wGRNAN8ZnME1pdOjXXx9Y8c4'
            + '/bfKxoRaU1UGBxLC9dfugk0BOPAt2YhKtgUEqckFw6QwNWY9rAhzo2VDEGTaAkOJigpSry7gNSoHs1LKalMKw02nq0JQCkpvYsDoCQ1CGbQYay9r7SxcGfdYAUABuhi4YGpwNHJpjnSGInrqz04YY4NQ0JijsVrV1lwEMfFRLsPA5j0raylIKrhURUpCcqF6vUFt2JeO'
            + '/x87x9s0X7SfeKjwNfGmcILQcgo18HaohyJSCDdVgKsaB8iWp+uG9LiMDUVqSPSuJj0zlL6Zw1U8U7xJxb63wkGRLlivkfhSOi6EkTL6Q4HfuuHBamuNcdBD5ybvaBPeIZy1DQtmeMdHRw43xf66X6dagEmgAc1p+H5mDLkJuX2rfu8BdJp4CFjoxPpf1AJqaDH5RZYLCRTtFLjHs4F9'
            + '/kcxCx0X5/o4faptyzQVZSXNTi2VaQ3ZxdRBAb1d3JGDwsdHG+ot9m3RcBbI0q1MM4WVOUxU5cM3NVeOAxjo6JP+ol9LawhyScbt5837UV6bWu6VPUYeN3DDCOjo9U+2b6iJZ7WVlTpSKmgcD1iXaJpljstnjXAFo6OjrPTLtnzCoFzn4Y4RJVIGFWxxzhI6NIii1lIACUtwfM7zDvtar5SyWuk4e7e9Y6OgFXNNfy+bPAicce8RirCusJHQUREsEXqu+8'
            + '/OESouanLMnfvhY6CHhIIDvhvO8awgJINcCMhXjSOjogHMJ6wochIyGfGGN3lOXBDBy3ejo6PLy91vj7im2jONWYMRgAHdndscTCtROolnmWdhgIWOifRfZZqyw+sLzegiBNWQpZBbGgw8I6OhCjyZYTMWBgMIKlTBxi6jzTdb1MdHQ5e0npZ7IQ6Sskl3cE0p5+cOTQlt4hY6Ovxff8AChLtCu6'
            + '/PPxjo6Ojuy//2Q==',
        href: 'https://ru.wikipedia.org/wiki/BMW_i8'
      },
      {
        name: 'Mazda',
        year: '2010',
        image: 'https://avtoprofy.ru/auto/i/mazda_rx-7.jpg',
        href: 'https://ru.wikipedia.org/wiki/Mazda_RX-7'
      },
      {
        name: 'Mercedes-Benz',
        year: '2020',
        image: 'https://img.mercedes-benz-kiev.com/data/news/181-mercedes-benz-vision-avtr/181-Mercedes-Benz-vision-avtr-1.jpg',
        href: 'https://mercedes-benz-kiev.com/ru/novyy-mercedes-benz-vision-avtr-1384'
      },
    ],
    title: '',
    flag: true,
    toggleCar: false,
  }

  changeTitle = (newTitle) => {
    this.setState({
      title: newTitle,
      flag: true
    })
    document.getElementById("input").value = ""
  }

  inputChangeTitle = (e) => {

    this.setState({
      title: e.target.value ,
      toggleCar: e.target.value !== ''
    })
  }

  render() {
    const styleDiv = {
      color: 'blue',
      textAlign: 'center',
      backgroundColor: 'DarkGray',
      width: '100vw',
      height: '100%'
    }
    const styleDisplay = {
      display: 'inline',
      width: '100px',
      height: '100px',
      padding: '5px',
      paddingLeft: '1%'
    }
    let allListCar = null
    let flags = false
    if (!this.state.toggleCar) {
      flags = true;
      allListCar = this.state.cars.map((car, index) => {
        return <div key={index} style={{paddingTop: '10px'}}>
          <Car
              name={car.name}
              year={car.year}
              image={car.image}
              href={car.href}
          />
        </div>
      })
    } else if (this.state.toggleCar){
      allListCar = this.state.cars.map((car, index) => {
        if (car.name.toLowerCase().startsWith(this.state.title.toLowerCase())) {
          flags = true;
          return <div key={index} style={{paddingTop: '10px'}}>
            <Car
                name={car.name}
                year={car.year}
                image={car.image}
                href={car.href}
            />
          </div>
        }
      })
    }  if (!flags) {
      allListCar = <div style={{border: '4px double blue',
        background: 'cyan',
        paddingTop: '10px',
        marginBottom: '10px'}}>
        <div style={{paddingTop: '250px', paddingLeft:' 50px', width: '800px', height: '500px'}}>
       <h3>The search has not given any results!!!</h3>
          <p>"{this.state.title}"</p>
        </div>
      </div>
      flags = false
    }

    const inputStyle = ['style','input']

    if (this.state.title !== '') {
      console.log(inputStyle.join(' '))
      inputStyle.push('blue')
    } else {
      inputStyle.push('red')
      console.log('AAAAAAA ',inputStyle.join('.'))
    }
    return (
        <div style={styleDiv}>
          <header className={style.header}>
            <div style={{padding: '10px'}}>
              <div>
                <h1>Automotive catalog</h1>
              </div>
              <div style={styleDisplay}>
              <span>
                <input
                    style={{borderRadius: '20px'}}
                    type="text" id='input'
                    onChange={this.inputChangeTitle}
                    placeholder="Enter brand name"/>
              </span>
              </div>
            </div>
          </header>
          <div style={{width: 900, marginTop: '155px', marginLeft: '25%', paddingTop: '20px'}}>
            {allListCar}
          </div>
        </div>
    );
  }
}

export default App;

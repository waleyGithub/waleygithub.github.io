"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6138],{6986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var l=t(7462),a=(t(7294),t(3905));const s={title:"FlappyBird",data:new Date("2021-12-05T21:23:47.000Z")},r=void 0,i={unversionedId:"evolutionary computation/FlappyBird",id:"evolutionary computation/FlappyBird",title:"FlappyBird",description:"\u4f7f\u7528MLP\u4e0e\u9057\u4f20\u7b97\u6cd5\u73a9FlappyBird GitHub\u94fe\u63a5",source:"@site/Project/Coding/evolutionary computation/FlappyBird.md",sourceDirName:"evolutionary computation",slug:"/evolutionary computation/FlappyBird",permalink:"/Coding/evolutionary computation/FlappyBird",draft:!1,tags:[],version:"current",lastUpdatedBy:"waleyGithub",lastUpdatedAt:1676356127,formattedLastUpdatedAt:"2023\u5e742\u670814\u65e5",frontMatter:{title:"FlappyBird",data:"2021-12-05T21:23:47.000Z"},sidebar:"tutorialSidebar",previous:{title:"Evolutionary Computation",permalink:"/Coding/category/evolutionary-computation"},next:{title:"OneMax Problem",permalink:"/Coding/evolutionary computation/max-one problem"}},o={},p=[{value:"<strong>\u4f7f\u7528MLP\u4e0e\u9057\u4f20\u7b97\u6cd5\u73a9FlappyBird</strong> GitHub\u94fe\u63a5",id:"\u4f7f\u7528mlp\u4e0e\u9057\u4f20\u7b97\u6cd5\u73a9flappybird-github\u94fe\u63a5",level:2},{value:"\u6240\u9700\u73af\u5883",id:"\u6240\u9700\u73af\u5883",level:2},{value:"\u4ee3\u7801 Code",id:"\u4ee3\u7801-code",level:2},{value:"MLP\u795e\u7ecf\u7f51\u7edc neural network controller",id:"mlp\u795e\u7ecf\u7f51\u7edc-neural-network-controller",level:3},{value:"\u6e38\u620f Game",id:"\u6e38\u620f-game",level:3},{value:"\u9057\u4f20\u7b97\u6cd5 The Genetic Algorithm",id:"\u9057\u4f20\u7b97\u6cd5-the-genetic-algorithm",level:3},{value:"\u68c0\u9a8c\u7b97\u6cd5 Examination of the algorithm",id:"\u68c0\u9a8c\u7b97\u6cd5-examination-of-the-algorithm",level:2},{value:"\u68c0\u9a8c\u6700\u4f18\u89e3 Examine the best solution",id:"\u68c0\u9a8c\u6700\u4f18\u89e3-examine-the-best-solution",level:2}],m={toc:p};function d(e){let{components:n,...s}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528mlp\u4e0e\u9057\u4f20\u7b97\u6cd5\u73a9flappybird-github\u94fe\u63a5"},(0,a.kt)("strong",{parentName:"h2"},"\u4f7f\u7528MLP\u4e0e\u9057\u4f20\u7b97\u6cd5\u73a9FlappyBird")," ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/waleyCode/FlappyBird"},"GitHub\u94fe\u63a5")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"flappyBird",src:t(5282).Z,width:"2048",height:"1024"})),(0,a.kt)("h2",{id:"\u6240\u9700\u73af\u5883"},"\u6240\u9700\u73af\u5883"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/release/python-394/"},"Python 3.9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://deap.readthedocs.io/en/master/"},"DEAP Library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jupyter.org"},"Juypter Notebook"))),(0,a.kt)("h2",{id:"\u4ee3\u7801-code"},"\u4ee3\u7801 Code"),(0,a.kt)("h3",{id:"mlp\u795e\u7ecf\u7f51\u7edc-neural-network-controller"},"MLP\u795e\u7ecf\u7f51\u7edc neural network controller"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport math\n\nclass MLP(object):\n    def __init__(self, numInput, numHidden1, numHidden2, numOutput):\n        self.fitness = 0\n        self.numInput = numInput + 1 # Add bias node from input to hidden layer\u2423 \udbff\udc00\u21921 only\n        self.numHidden1 = numHidden1 # Feel free to adapt the code to add more\u2423 \udbff\udc00\u2192biases if you wish\n        self.numHidden2 = numHidden2\n        self.numOutput = numOutput\n        self.w_i_h1 = np.random.randn(self.numHidden1, self.numInput)\n        self.w_h1_h2 = np.random.randn(self.numHidden2, self.numHidden1)\n        self.w_h2_o = np.random.randn(self.numOutput, self.numHidden2)\n        self.ReLU = lambda x : max(0,x)\n    def sigmoid(self, x):\n        try:\n            ans = (1 / (1 + math.exp(-x)))\n        except OverflowError:\n            ans = float('inf')\n        return ans\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class MLP(MLP):\n     def feedForward(self, inputs):\n        inputsBias = inputs[:]\n        inputsBias.insert(len(inputs), 1)\n        h1 = np.dot(self.w_i_h1, inputsBias)\n        h1 = [self.ReLU(x) for x in h1]\n        h2 = np.dot(self.w_h1_h2, h1)\n        h2 = [self.ReLU(x) for x in h2]\n        output = np.dot(self.w_h2_o, h2)\n        output = [self.sigmoid(x) for x in output]\n        return output\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class MLP(MLP):\n    def getWeightsLinear(self):\n        flat_w_i_h1 = list(self.w_i_h1.flatten())\n        flat_w_h1_h2 = list(self.w_h1_h2.flatten())\n        flat_w_h2_o = list(self.w_h2_o.flatten())\n        return (flat_w_i_h1 + flat_w_h1_h2 + flat_w_h2_o)\n    def setWeightsLinear(self, Wgenome):\n        numWeights_I_H1 = self.numHidden1 * self.numInput\n        numWeights_H1_H2 = self.numHidden2 * self.numHidden1\n        numWeights_H2_O = self.numOutput * self.numHidden2\n            \n        self.w_i_h1 = np.array(Wgenome[:numWeights_I_H1])\n        self.w_i_h1 = self.w_i_h1.reshape((self.numHidden1, self.numInput))\n            \n        self.w_h1_h2 = np.array(Wgenome[numWeights_I_H1:(numWeights_H1_H2+numWeights_I_H1)])\n        self.w_h1_h2 = self.w_h1_h2.reshape((self.numHidden2, self.numHidden1))\n            \n        self.w_h2_o = np.array(Wgenome[(numWeights_H1_H2 + numWeights_I_H1):])\n        self.w_h2_o = self.w_h2_o.reshape((self.numOutput, self.numHidden2))\n")),(0,a.kt)("h3",{id:"\u6e38\u620f-game"},"\u6e38\u620f Game"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pygame\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class FlappyBird:\n    def __init__(self):\n        self.screen = pygame.display.set_mode((400, 708))\n        self.bird = pygame.Rect(65, 50, 50, 50)\n        self.background = pygame.image.load("assets/background.png").convert()\n        self.birdSprites = [pygame.image.load("assets/1.png").convert_alpha(),\n                            pygame.image.load("assets/2.png").convert_alpha(),\n                            pygame.image.load("assets/dead.png")]\n        self.wallUp = pygame.image.load("assets/bottom.png").convert_alpha()\n        self.wallDown = pygame.image.load("assets/top.png").convert_alpha()\n        self.gap = 130\n        self.gravity = 5\n        self.delay = False\n        self.restart()\n\n    def updateWalls(self):\n        self.wallx -= 5\n        self.distanceMoved += 5\n        if self.wallx < -80:\n            self.wallx = 400\n            self.counter += 1\n            self.offset = np.random.randint(-180, 200)\n\n    def birdUpdate(self):\n        if self.jump:\n            self.jumpSpeed -= 1\n            self.birdY -= self.jumpSpeed\n            self.jump -= 1\n        else:\n            self.birdY += self.gravity\n            self.gravity += 0.2\n        self.bird[1] = self.birdY\n        upRect = pygame.Rect(self.wallx,\n                             360 + self.gap - self.offset + 10,\n                             self.wallUp.get_width() - 10,\n                             self.wallUp.get_height())\n        downRect = pygame.Rect(self.wallx,\n                               0 - self.gap - self.offset - 10,\n                               self.wallDown.get_width() - 10,\n                               self.wallDown.get_height())\n\n        if upRect.colliderect(self.bird):\n            self.dead = True\n        if downRect.colliderect(self.bird):\n            self.dead = True\n\n        if not 0 < self.bird[1] < 720:\n            self.dead = True\n\n    def updateScreen(self):\n        font = pygame.font.SysFont("Arial", 50)\n        self.screen.fill((255, 255, 255))\n        self.screen.blit(self.background, (0, 0))\n        self.wallUpY = 360 + self.gap - self.offset\n        self.wallDownY = 0 - self.gap - self.offset\n        self.screen.blit(self.wallUp, (self.wallx, self.wallUpY))\n        self.screen.blit(self.wallDown, (self.wallx, self.wallDownY))\n        self.screen.blit(font.render(str(self.counter), -1, (255, 255, 255)),(200, 50))\n        self.screen.blit(self.birdSprites[self.sprite], (70, self.birdY))\n\n    def makeJump(self):\n        self.jump = 17\n        self.gravity = 5\n        self.jumpSpeed = 10\n\n    def restart(self):\n        self.wallx = 400\n        self.wallUpY = 0\n        self.wallDownY = 0\n        self.birdY = 400\n        self.jump = 0 # A timer for the jump\n        self.jumpSpeed = 10\n        self.dead = False\n        self.sprite = 1\n        self.distanceMoved = 0\n        self.counter = 0\n        self.stepsSinceLastJump = 0\n        self.offset = np.random.randint(-180, 300)\n\n    def run(self, network):\n        pygame.font.init()\n\n        while self.dead == False:\n            for event in pygame.event.get():\n                if event.type == pygame.QUIT:\n                    sys.exit()\n                if (event.type == pygame.KEYDOWN) and not self.dead:\n                    #self.makeJump()\n                    if self.delay:\n                        self.delay = False\n                    else:\n                        self.delay = True\n\n            if self.delay: time.sleep(0.01)\n                    \n            # We don\'t want it going on forever, so set an upper limit\n            if self.counter == 10:\n                self.dead = True\n\n            self.xdiff = 70 - self.wallx\n            ydiffUp = self.birdY - self.wallUpY\n            ydiffDown = self.birdY - self.wallDownY\n            \n            decision = network.feedForward([self.xdiff, ydiffUp, ydiffDown])\n\n            if decision[0] > 0.5 and not self.dead:\n                self.makeJump()\n\n            self.updateScreen()\n            self.updateWalls()\n            self.birdUpdate()\n            \n            pygame.display.update()\n\n        return self.distanceMoved\n')),(0,a.kt)("h3",{id:"\u9057\u4f20\u7b97\u6cd5-the-genetic-algorithm"},"\u9057\u4f20\u7b97\u6cd5 The Genetic Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from deap import base\nfrom deap import creator\nfrom deap import tools\n\nimport random\nimport time\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"numInputNodes = 3\nnumHiddenNodes1 = 3\nnumHiddenNodes2 = 2\nnumOutputNodes = 1\n\nIND_SIZE = ((numInputNodes+1) * numHiddenNodes1) + (numHiddenNodes1 * numHiddenNodes2) + (numHiddenNodes2 * numOutputNodes)\n")),(0,a.kt)("p",null,"Create a single neural network controller that we will use. We will evolve weights and pass them to this network when we need to evaluate their fitness."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"myNet = MLP(numInputNodes, numHiddenNodes1, numHiddenNodes2, numOutputNodes)\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'creator.create("FitnessMax", base.Fitness, weights=(1.0,))\ncreator.create("Individual", list, fitness=creator.FitnessMax)\n\ntoolbox = base.Toolbox()\ntoolbox.register("attr_float", random.uniform, -1.0, 1.0)\ntoolbox.register("individual", tools.initRepeat, creator.Individual,toolbox.attr_float, n=IND_SIZE)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def evaluate(indiv, myNet, game):\n    myNet.setWeightsLinear(indiv)   # Load the individual's weights into the neural network\n    game.restart()\n    fitness = game.run(myNet) # Evaluate the individual by running the game (discuss)\n    return fitness,\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'toolbox.register("evaluate", evaluate)\ntoolbox.register("select", tools.selTournament, tournsize=3)\n\ntoolbox.register("mutate", tools.mutGaussian, mu=0.0, sigma=0.5, indpb=0.1)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'toolbox.register("population", tools.initRepeat, list, toolbox.individual)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'stats = tools.Statistics(key=lambda ind: ind.fitness.values)\nstats.register("avg", np.mean)\nstats.register("std", np.std)\nstats.register("min", np.min)\nstats.register("max", np.max)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"logbook = tools.Logbook()\n\npop = toolbox.population(n=100)\n")),(0,a.kt)("p",null,"Create a single game object. We will use this single object evaluate each of our solutions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"game = FlappyBird()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"fitnesses = [toolbox.evaluate(indiv, myNet, game) for indiv in pop]\nfor ind, fit in zip(pop, fitnesses):\n    ind.fitness.values = fit\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'NGEN = 10\n\nfor g in range(NGEN):\n    print("-- Generation %i --" % g)\n      \n    offspring = toolbox.select(pop, len(pop))\n    offspring = list(map(toolbox.clone, offspring))\n\n    for mutant in offspring:\n        toolbox.mutate(mutant)\n        del mutant.fitness.values\n                         \n    invalid_ind = [ind for ind in offspring if not ind.fitness.valid]\n    fitnesses = [toolbox.evaluate(indiv, myNet, game) for indiv in invalid_ind]\n    for ind, fit in zip(invalid_ind, fitnesses):\n         ind.fitness.values = fit\n    \n    pop[:] = offspring\n    record = stats.compile(pop)\n    logbook.record(gen=g, **record)\n')),(0,a.kt)("h2",{id:"\u68c0\u9a8c\u7b97\u6cd5-examination-of-the-algorithm"},"\u68c0\u9a8c\u7b97\u6cd5 Examination of the algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'logbook.header = "gen", "avg", "evals", "std", "min", "max"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\n%matplotlib inline\ngen = logbook.select("gen")\navgs = logbook.select("avg")\nstds = logbook.select("std")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"plt.rc('axes', labelsize=14)\nplt.rc('xtick', labelsize=14)\nplt.rc('ytick', labelsize=14) \nplt.rc('legend', fontsize=14)\n\nfig, ax1 = plt.subplots()\n\nline1 = ax1.errorbar(gen, avgs, yerr=stds, errorevery=2)\nax1.set_xlabel(\"Generation\")\nax1.set_ylabel(\"Mean Fitness\")\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"FPresults",src:t(6598).Z,width:"409",height:"273"})),(0,a.kt)("h2",{id:"\u68c0\u9a8c\u6700\u4f18\u89e3-examine-the-best-solution"},"\u68c0\u9a8c\u6700\u4f18\u89e3 Examine the best solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"indiv1 = tools.selBest(pop, 1)[0]\ntoolbox.evaluate(indiv1, myNet, game)\n")))}d.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},s=Object.keys(e);for(l=0;l<s.length;l++)t=s[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)t=s[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),p=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return l.createElement(o.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,c=d["".concat(o,".").concat(u)]||d[u]||f[u]||s;return t?l.createElement(c,r(r({ref:n},m),{},{components:t})):l.createElement(c,r({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[d]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<s;p++)r[p]=t[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6598:(e,n,t)=>{t.d(n,{Z:()=>l});const l="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAZkAAAERCAYAAACpRtp7AAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjMuNCwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy8QVMy6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAiuElEQVR4nO3deZhcZZn38e+vu5N09gBJSEIMIYpJDCpLdIgDjAqBwRUdXyMqizIsgwuLyiBuiMowEllUULZXMe84ZFRUQJawy0hEExdIAgmQEJbOxpJOmqSTXu73j3M6Xal00iehT1Wl6/e5rrq6znOeOnVXXUnffc5znudWRGBmZpaHmnIHYGZmvZeTjJmZ5cZJxszMcuMkY2ZmuXGSMTOz3DjJmJlZbpxkzMwsNyVNMpKOkHSLpBckhaSTi/b/NG0vfPyxqE8/ST+Q9KKkV9PjjS3qs4ekWZIa08csScPy/4RmZlaorsTvNwhYAPwsfXTlHuCEgu3NRfuvAD4IHA+8BFwG3CbpkIhoS/v8HBgHHAsEcD0wC3h/dwEOHz48xo8fn+GjmJlZh/nz578YESOK20uaZCLiduB2SM5attNtU0Ss7GqHpKHAKcCnIuLutO0EYDlwFHCXpMnAPwOHRcTDaZ/TgYckTYyIxTuKcfz48cybN2+nP5uZWTWTtLyr9kockzlM0mpJSyRdJ2lkwb5DgD7AnI6GiHgOeBx4R9o0DWgCHi543R+AVwv6mJlZCZT6cll37gRuBpYB44FvA/ell8I2AaOANuDFotetSveR/lwTBYuyRURIWl3Qx8zMSqCikkxE3FSw+Zik+SSXwt5Lkny2RyRjL1sOlaFP5w7pNOA0gHHjxu1MyGZmtgOVeLlsi4hoAJ4H9k+bVgK1wPCiriNJzmY6+oyUpI6d6fMRBX2K3+faiJgaEVNHjNhm3MrMzHZRRScZScOBfYAVadN8oAWYXtBnLDCZzjGYuSR3sU0rONQ0YCBbj9OYmVnOSnq5TNIg4A3pZg0wTtKBwMvp40LgVyRJZTzwH8Bq4NcAEdEo6Qbg0nSMpeMW5kdJbn0mIh6XdCdwjaRTSS6TXQPc1t2dZWZm1rNKfSYzFfhr+ugPfDN9fhHJgP6bgd8CS4AbgcXAtIhYX3CMc0jGZ2aT3DXWBLy/YI4MwCeAv5PchXZX+rxw7o2ZmZWAXBlza1OnTg3PkzEz2zmS5kfE1OL2ih6TMTPrzWZcM5cZ18wtdxi5cpIxM7PcOMmYmVlunGTMzCw3TjJmZpYbJxkzM8uNk4yZmeXGScbMzHLjJGNmZrlxkjEzs9w4yZiZWW6cZMzMLDdOMmZmlhsnGTMzy42TjJmZ5cZJxszMcuMkY2ZmuXGSMTOz3DjJmJlZbpxkzMwsN04yZmaWGycZMzPLjZOMmZnlxknGzMxy4yRjZma5cZIxM7PcOMmYmVlunGTMzCw3TjJmZpYbJxkzM8uNk4yZmeXGScbMzHLjJGNmZrlxkjEzq3Ktbe1sam3L5dhOMmZmVe4X85/n3TMfZGVjc48f20nGzKyKNbe0ceU9T7L3kH7sPaRfjx/fScbMrIr9vz8uZ+W6Zr50zCQk9fjxnWTMzKrU+uYWrrr/KQ7ffzjTXr9XLu/hJGNmVqWuf2gZr2xo4bxjJuX2Hk4yZmZV6KWmTVz/0FLe8+ZRvHns0Nzex0nGzKwK/eiBp9nY0sa509+Y6/s4yZiZVZmGtRv52R+X8y8Hj+UNIwfn+l5OMmZmVeb79z4JAWfnfBYDTjJmZlVl6ZomfjH/eT5x6Dj2GdY/9/dzkjEzqyKX3b2EfnU1fOZdbyjJ+5U0yUg6QtItkl6QFJJOLtovSRdKapC0UdIDkqYU9ekn6QeSXpT0anq8sUV99pA0S1Jj+pglaVj+n9DMrHIteKGR2x5dwSmH7cfwQT0/u78rpT6TGQQsAM4CNnax/zzgC8DngLcBq4G7JRWOTF0B/AtwPHA4MAS4TVJtQZ+fAwcDxwL/nD6f1ZMfxMxsdzNzzmKGDejDqUdMKNl71pXsnYCIuB24HUDSTwv3KVnP4Gzgkoj4Vdp2Ekmi+ThwjaShwCnApyLi7rTPCcBy4CjgLkmTSRLLYRHxcNrndOAhSRMjYnHen9PMrNL8adnLPLB4DV8+dhJD6vuU7H0raUxmP2AUMKejISI2Ar8H3pE2HQL0KerzHPB4QZ9pQBPwcMGx/wC8WtDHzKxqRASX3vUEIwf348Rp40v63pWUZEalP1cVta8q2DcKaANe7KbPmoiIjp3p89UFfczMqsYDi9fw52de4fNH7k//vrXdv6AHVVKS6RBF2+qirVhxn676b/c4kk6TNE/SvDVr1mQO1Mys0rW3B9+9azHj9hzAjLe9ruTvX0lJZmX6s/hsYySdZzcrgVpgeDd9Rqpgzer0+Qi2PUsCICKujYipETF1xIgRu/4JzMwqzG2PreDxFes4d/ob6VNb+l/5lZRklpEkiOkdDZLqSe4g6xhfmQ+0FPUZC0wu6DOX5C62aQXHngYMZOtxGjOzXq2lrZ3L5ixm0qjBfOCtY8oSQ0nvLpM0COiYAVQDjJN0IPByRDwr6QrgK5KeAJYAXyUZxP85QEQ0SroBuFTSauAl4DLgUeCetM/jku4kuRvtVJLLZNcAt/nOMjOrJr+c/zzPvLSB60+cSk1Nzxcky6KkSQaYCtxfsP3N9HEjcDLwXaA/cBWwB/AIcHRErC94zTlAKzA77XsvcGJEtBX0+QTwfTrvQrsF+GwPfxYzs4rVUVb54HHDOHLyyLLFkSnJSPonoDkiHkm3Twb+FVgIfCEimrIcJyIeIDmz2N7+AC5MH9vr00wyWfNzO+jzMvDJLDGZmfVGs+YmZZUvn3FgLmWVs8o6JnMF6YC8pIkkl58eJRnruDSXyMzMbJesb27h6gfyLaucVdYk83rgsfT5vwB3R8SZwKnA+/MIzMzMdk0pyipnlTXJBMmtwwBHAnemz1cC5U2TZma2RanKKmeVNcn8Gfhauk7Y4cAdaft4Oue3mJlZmV1dorLKWWVNMmcDBwI/BL4TEU+n7f8Hzz0xM6sIDWs3MqtEZZWzynR3WUQsAN7Sxa4vkqwlZmZmZVbKsspZZTqTkVQjqaZge5SkfwUOjoiW3KIzM7NMSl1WOausl8t+RzovJZ21P4/k1uUHJZ2YU2xmZpbR90pcVjmrrEnmEOC+9PmHgXUki1KeSnLJzMzMymTBC438rsRllbPKmmQGA2vT50cDv04vk91HMofGzMzKZOacxQztX9qyylllTTLPAv8oaSBwDHB32r4nsCGPwMzMrHsdZZX/7Z2vL2lZ5ayyLpB5GTCLZEXk5SQlkQGOoHMlADMzK6GI4Lt3JmWVTypxWeWsst7CfI2k+cDrSJaUaU93PQ18La/gzMxs++5fvJp5y1/h28cdUPKyylllXuo/IuaR3FVW2Pa7Ho/IzMy61d4eXHrXkrKVVc4qc2VMSWdKWihpg6QJadu/S/pofuGZmVlXyl1WOauskzHPJqlSeS1b14NpwMXAzMxKqhLKKmeVNf2dAZwaEVeSVKXs8BdgSo9HZdaLzLhmLjOumVvuMKwX+cW8pKzyF4+eWLayylllTTL7Agu6aG8hKYFsZmYl0NzSxvfvLX9Z5ayyJpmlwMFdtL8HWNRz4ZiZ2Y50lFX+0jGTylpWOausd5fNBH4oaQDJmMy0tLbMecCn8wrOzMw6VVJZ5ayyzpP5iaQ64GJgAMnEzBeAz0fE7BzjMzOz1HUVVFY5q52ZJ3MdcJ2k4UBNRKzOLywzMyv0UtMmbqigsspZZU4yHSLixTwCMTOz7au0sspZZUoykvYEvgMcSbLE/1Y3DETEkJ4PzczMoDLLKmeV9UzmBuAgksmYDUDkFpGZmW3lynuSsspnHbV/uUPZaVmTzJHA9Ih4JM9gzMxsa0+vaeKXf3meEw7dl7F7DCh3ODst6zyZ1STL/JuZWQldlpZV/uy7K6usclZZk8xXgIskDcozGDMz61TJZZWzynq57KvAeGC1pOUky8lsERFv6eG4zMyq3qV3VW5Z5ayyJplf4cF+M7OSeWTpSzy4ZA3nHzupIssqZ5V1xv+FOcdhZmapiODSuxZXdFnlrLLWk1kqaZuFciQNk7S058MyM6teHWWVP3/k/hVbVjmrrAP/44GuPmk/YGyPRWNmVuV2l7LKWe3wcpmkDxdsvldSY8F2Lcn8mWV5BGZmVo06yipfMePAii6rnFV3YzK/TH8Gyaz/Qi3AM8AXejgmM7OqtDuVVc5qh0kmImoAJC0D3ubFMc3M8tNRVvn6E6dWfFnlrLLeXbZf3oGYWXWYcc1cAGafPq3MkVSW5pY2rrx3yW5TVjmr7SYZSecCV0dEc/p8uyLish6PzMysisyau5xV6zZxxYyDdouyylnt6Ezmc8CNQHP6fHsCcJIxM9tFu2NZ5ay2m2QKL5H5cpmZWX52x7LKWe3w/jhJL6fllju2z5c0LPeozMyqREtbOzc8tJRjD9i9yipn1d1N2MOK+lwA7JlbNGZmVaZh7UY2trTxhaN3r7LKWe3sTJ/eMxplZlZm65tbWbV+025ZVjmrrKswm5lZD1nf3MLMuxazaMU6+tbWcM703nkWA9mSzBmSOqpi1gGnSHqpsINvYTYzy+bOBSu58JaFrFrfzN5D+jF2jwGMGda/3GHlprsk8yzwqYLtlcDHi/r4FmYzs26saNzIN367kDmLVjFp1GB+9MmDueSOJ8odVu66W1ZmfIniAEDShcA3ippXRcSodL/S/acBewCPAJ+JiIUFx+gHzASOB/oD9wJnRsTzuX8AM7Mibe3BrLnPMHPOElrb2zn/2Emccth+vWLxyywqcUxmMfDOgu22gufnkSzIeXLa7+vA3ZImRsT6tM8VwAdJksxLJGdZt0k6JCIKj2VmlqtFDev48q8f4+/PreXw/YfznePezLi9BpQ7rJKqxCTTGhErixvTs5izgUsi4ldp20nAapJLeNdIGgqcAnwqIu5O+5wALAeOAu4qyScws6q2cXMbV9y7hOsfWsaw/n248mMH8oG3julVy8VkVYlJZoKkF4DNJJfDLoiIpcB+wChgTkfHiNgo6ffAO4BrgEOAPkV9npP0eNrHScbMcvXgkjV89TeP8dzLG/no1LFc8J7JDBvQt9xhlU2lJZlHSC6FPQGMBL4KPCxpCkmCAVhV9JpVwD7p81Ekl9eKSxKsKnj9NiSdRjLOw7hx43Y9ejOrWi82beJbty3it39rYMKIgdx02qEcOqF3rUO2KyoqyUTEHYXbkv4ILAVOAv7Y0a3oZeqirdgO+0TEtcC1AFOnTu3uWGZmW0QE/zPvOS6+/Qk2bm7jrCP358x3vZ5+dV1VrK8+O51k0rXLtrotIiJe7qmAio7bJGkhsD/wm7R5FPBcQbeRdJ7drCQpCz0cWFPU5/d5xGhm1evpNU1ccPNjPLLsZd4+fk8u/vABvXbm/q7KlGQk7Qv8GHgXyZjHll0kZwi5pGxJ9cAk4H5gGUkSmQ78uWD/4cCX0pfMJykLPR34edpnLDAZeDiPGM2s+mxqbeNHDzzN1fc/TX2fGi758Jv56NTX9Zpqlj0p65nMT0gWy/w00ED3l6d2iaSZwK0kk0BHAl8DBgI3RkRIugL4iqQngCUkYzZNpAklIhol3QBcKmk1nbcwPwrck0fMZlZdHln6Ehf8+jGeXvMqH3jrGL72vjcxYnC/codVsbImmbcDh0bEgjyDAcYC/03n5a4/pu+7PN3/XZIJllfRORnz6II5MgDnAK3AbDonY57oOTJm9lo0bmjhP+54nJv+/Bxj9+jPTz/1Nt45sfeUSc5L1iSzDMg9VUfEx7rZH8CF6WN7fToqee6omqeZWSYRwa2PruCiWxfyyoYWTj9iAmcdtT8D+lbUfVMVK+u3dBbwH5LOjIin8gzIzKxSPPfyBr76mwU8uGQNbxk7lBs//XamjOl9hcXylDXJ/JbkTGaxpE0kl6O2iIghPR2YmVm5tLa1c8P/LuPye5ZQK/GN97+JE6eNp9YD+zsta5L5bK5RmJlViL8/t5Yv3/wYi1as46jJe3PRB6f06qX485YpyUTEjXkHYmZWTk2bWpl512J+NvcZRgzux48/eTDHTBlVleuN9aRdmYw5CthqIZ6IeLbHIjIzK7G7F63i679dwMp1zZxw6L588ZiJDKnv0/0LrVtZJ2MOBb4PfJSiBJPy+glmtttZ2djMhbcs5M6FK5m492Cu+sTBHDxuj3KH1atkPZOZCbwVOA64mWRS5j4kd519IZfIzMx6QGtbO02bWlnf3Mq65hbWNyfPn1rdxFX3P0VLWzvn/fNETj18QtUUEiulrEnmWOD4iHhIUhswPyJmS1oBnA78MrcIzaxqbS9BrG9uYd3GdHtTul2wr/Dnhs3bn4d9+P7D+fZxB7DvXgNL+KmqS9YkM4yk8BdAI7AX8BQwF7i+58Mys0rQ3h60tget7e3Jz7b0eVvQ1h60tLWnP9Pt9vat2pP+QWtb+5bjrFm/ibb24Af3PvmaEkSHfnU1DK7vw5D6OgbX1zG4vg+jhtRveV74c0jB82H9+/K6Pft7YD9nWZPM08AEkjXFHgc+JulPwIeBXFZgNtudtbcHz72ygQUvrOO5lzewqbWds276K+2RzCAPgIAgiCB5EOn+ZGfS1tk/AtqTnVv6F752m+dFrw0KkkZHcmhvp60taGmPLpJDO+05Fr743t1LdjlBdP6s85L6FS5rkvkp8BbgAeAS4DaSuTM1JOMyZlWrpa2dp9c0seCFdSxsaGRhwzoeb1jH+k2dc5b71dXwt+fWUiMhACVLmCvdlkAo+VnYVtje0X87r0VQUwOiZpvXkvavFdTV1lBXo86fNaKuVtTV1FBbI/rUitqamvSn6FObtHf2LXp9bce+GmprRZ+tjtP5+o7jnn3TX6mtETedNo2+dR4D6e2yzpO5vOD5fZImAVOBJyPisbyCM6s0Gze38cTKdSxoWMeiNKE8sXI9m1vbAajvU8Pk0UP44EFjmDJmKFPGDOFbty6ipkbMPn1amaOvDPV9kjMPJ5jqsEsrvKXzYjw3xrZrxjVzAXbrX6yNG1pYuKKRhQVnKE+vadpyCWlo/z5MGTOEk6btuyWhTBgxaJulR1xjxKpZ5iQj6UzgM8B+wAERsVTS+cDSiPifvAI0y1tEsHr9JhY2NG51yev5VzZu6TNqSD1Txgzh2ANG8aYxQzlgnyHsM8yDxmbdyToZ82zgPOA/ScZkOrxAMjbjJGO7hfb24NmXN7CwYR0L0mSyqKGRF5s2b+mz3/CBvPV1w/j4P4zbcoYyfJCLUpntiqxnMmcAp0bE7yR9u6D9L8CUng/LbOe0p3dKtbQFLa3ttLS1s7mtncaNLTy+Yj0LXmhkUcM6Fq1YR1M6IF9XI/bfezDvnDiSKWOGMGXMUCaPHsxgLydi1mOyJpl9ga6qYraQVJ+serv7GEREcgtra/vW8xq6nAvRcZvrVrfCBm3pL/m29uDFpk1EwE1/ejb9hZ+8rjMBpNvpY3Pr1tubWjueR7p/6+3OtmS7tZt7bfv3qWXy6MF86KB9mDJmCAfsM5T99x7k21/NcpY1ySwFDqZzQmaH9wCLejQi61ZEsG5jKw2NG1nRuJEVjc2sWNtMQ+NGVq1rZuPmti0T5wonyBVOpCtOJN39kt5V59+87c2HEvSpraFvbXKbbJ/ammS7Lm2r62zr36eWIfV1yXZd16/Zartjf12yPbBvHRNHDWa/4QNdC8SsDHZm7bIfShpAcov+NEknkIzTfDqv4KrVuuYWVqxtLkggG2lobGZlY5JIVjY2bzMTukaw95B6Rg2tZ2Dfui7mLmw996F4nkNtTU3Sp+B1HXMnOvsUzZnY7jyLGr70i78jwY9POGSbBFBbIw+Ym1WJrPNkfiKpDrgYGADMIhn0/3xEzM4xvl6naVMrKxs30pAmkYa1ncljRZpImjZtVXgUCUYO7sfoof2ZuPdg3vnGkYwZVs/oof0ZNbSeMcPqGTGoH3UVtLhf/77JZajRQ3011ayaZb6FOSKuA66TNByoiYjV+YW1e2prD55e07Tl0tXKxm0Tyfrm1m1eN2JwP0YPref1IwZy2BuGM2ZYPaOG9mfM0HpGD+vPyMH9vDqsme2WdnoyZkS8mEcgu7vHXmhkw+Y2jvzeg1u17zWwL6OH1TNurwH8w4Q9GT20/5azkNFD69l7SL1nPptZr7XDJCPpliwHiYgP9Ew4u6/hg/rSHvCFo9/IqCFJItl7SP2WJTTMzKpRd2cy7yO5o+yB/EPZvXWMPXzooLFljqQy7K63cptZz+ouycwEPgkcAfwE+GlEPJ97VGZm1ivscDAgIs4DXgecQ7rqsqQ7JH1EkqdFm5nZDnU74hwRbRFxS0QcR7I45v3At4EXJA3KOT4zM9uN7extTQNJSjEPAppIiu2ZmZl1qdtbmCX1Bz4KnEJyyezXwEkRcW/Ose1WPNBtZrat7m5hvhaYATwJ3AB8ICLWliAuMzPrBbo7k/lXkgqYK4BjgWO7WnPK82TMzKwr3SWZn+FxFzMz20U7TDIRcXKJ4jAzs17Ii2aZmVlunGTMzCw3TjJmZpYbJxkzM8uNk4yZmeXGScbMzHLjJGNmZrnZ6fLLZmavhdf5qy4+kzEzs9w4yZiZWW6cZMzMLDdOMmZmlptenWQknSlpmaRmSfMlHV7umMzMqkmvTTKSZgBXAhcDBwEPA3dIGlfWwMzMqkivTTLAucBPI+K6iHg8Ij5HUnzt38ocl5lZ1eiVSUZSX+AQYE7RrjnAO0ofkZlZdeqVSQYYDtQCq4raVwGjijtLOk3SPEnz1qxZU4r4zMyqQm9NMh2KS0erizYi4tqImBoRU0eMGFGayMzMqkBvTTIvAm1se9Yykm3PbszMLCe9MslExGZgPjC9aNd0krvMzMysBHrzApmXAbMk/Qn4A3AGMAb4cVmjMjOrIr02yUTEbEl7AV8FRgMLgPdExPLyRmZmVj16bZIBiIirgavLHYeZWbXqlWMyZmZWGZxkzMwsN04yZmaWGycZMzPLjZOMmZnlxknGzMxy06tvYTarBLNPn1buEMzKxmcyZmaWGycZMzPLjZOMmZnlxknGzMxy4yRjZma5cZIxM7PcOMmYmVlunGTMzCw3TjJmZpYbJxkzM8uNk4yZmeXGScbMzHLjJGNmZrlxkjEzs9w4yZiZWW6cZMzMLDdOMmZmlhsnGTMzy42TjJmZ5cZJxszMcuMkY2ZmuXGSMTOz3NSVOwAzs2o1+/Rp5Q4hdz6TMTOz3DjJmJlZbpxkzMwsN04yZmaWGycZMzPLjZOMmZnlxknGzMxy4yRjZma5cZIxM7PcKCLKHUNFkbQGWL6LLx8OvNiD4ezu/H108nexNX8fnXrLd7FvRIwobnSS6UGS5kXE1HLHUSn8fXTyd7E1fx+devt34ctlZmaWGycZMzPLjZNMz7q23AFUGH8fnfxdbM3fR6de/V14TMbMzHLjMxkzM8uNk4yZmeXGSaYHSDpT0jJJzZLmSzq83DGVg6QvS/qzpHWS1ki6VdIB5Y6rEki6QFJI+mG5YykXSaMl3Zj+22iWtEjSP5U7rnKQVCvpWwW/N5ZJ+rakXlet2EnmNZI0A7gSuBg4CHgYuEPSuLIGVh7vBK4G3gG8G2gF7pG0ZzmDKjdJhwKnAo+WO5ZykTQM+AMg4L3AZOBzwOoyhlVO/w58Bvg8MAk4K93+cjmDyoMH/l8jSY8Aj0bEqQVtTwK/jIhe9w9mZ0gaBDQCx0XEreWOpxwkDQX+QpJkvg4siIjPljeq0pN0MfBPEfGP5Y6lEki6DXgpIk4qaLsR2Csi3le+yHqez2ReA0l9gUOAOUW75pD8NV/tBpP8G3ul3IGU0bUkf3DcV+5Ayuw44BFJsyWtlvQ3SZ+VpHIHVib/C7xL0iQASW8iOfu/vaxR5aDXXf8rseFALbCqqH0VcFTpw6k4VwJ/A+aWOY6ykHQq8AbghHLHUgEmAGcClwOXAAcCP0j3VeM41X+S/BG2SFIbye/i70TE1eUNq+c5yfSM4muO6qKtqki6DDgMOCwi2sodT6lJmkgyTnd4RGwudzwVoAaYV3AJ+a+S9icZh6jGJDMDOBH4OLCQJOleKWlZRNxQzsB6mpPMa/Mi0AaMKmofybZnN1VD0uXAx4B3RcTScsdTJtNIznQXFFwRqgWOkHQGMDAiNpUruDJYASwqanucZMC7Gl0KzIyIm9LtxyTtSzLw36uSjMdkXoP0L9T5wPSiXdNJ7jKrOpKuJPnr7N0R8US54ymj3wBvJvkLteMxD7gpfV5tZzd/ACYWtb2RXS+rsbsbQPIHaqE2euHvZJ/JvHaXAbMk/YnkP9IZwBjgx2WNqgwkXUUy/nAc8IqkjjO8pohoKltgZRARa4G1hW2SXgVejogF5YipzC4HHpb0FWA2ye3+nwcuKGtU5XMrcL6kZSSXyw4CzgV+VtaocuBbmHuApDOB84DRwALgnIj4fXmjKj1J2/vH9M2IuLCUsVQiSQ9QpbcwA0h6L8k41UTgWZKxmB9EFf4SkjQY+BbwIZLL6ytIznIviojmcsbW05xkzMwsN73u+p+ZmVUOJxkzM8uNk4yZmeXGScbMzHLjJGNmZrlxkjEzs9w4yZhVIUnPSPpiueOw3s9Jxmw7JO0t6XJJT6bVC1dLeljS59JaORVP0oWSulph4G0kBebMcuVlZcy6IGk8yTJB64CvkVS1rCFZb+tE4CXg52WMr+9rWd05Itb0ZDxm2+MzGbOu/QhoB6ZGxE0RsSgiFkTEzRFxHPDfkFS+lHRtepazXtKDkqZ2HETSyZKaJB0paYGkVyXdL2m/wjeT9H5J8wvqvX8nLYrXsf+Z9Kzk/0paC/xX2n6JpMWSNqZ9viupvuO9gW8AUyRF+ji54HhfLDj+OEm/Tj/Dekk3SxpbsP/CNP6PSXo67fMbScN79mu33sZJxqyIpD2BY4CrIuLVrvpERKRVHX8H7AO8j2SRw98D90kaXdC9H8kS7p8mKQEwjIIFVCUdQ5I0fghMSft9hGSdr0LnAk8AU+lcWPLVtP9kkqJgHwO+ku6bDXwPWEyyrt7otK3484pk1ei9SaozvotkkdffFFWuHE9SB+VDwNHp5/1OV9+P2RYR4YcffhQ8gH8gKTr3oaL254Gm9PFjkl/ITUD/on5/A85Ln5+cHmtiwf5PkCz1X5Nu/x74WtExjkuP3bG+4DPArRliPwN4qmD7QpJFOYv7PQN8MX0+nWSZ+fEF+yeQnMkdVXCcZmBoQZ+vFL6XH3509fCYjFl2h5MUHrsWqAcOIakLsqaoVH098PqC7U0RsbhguwHoQ3JG83J6nLdL+veCPjVAf5KCeCvStnnFAUn6CHA2SZnnQWl8tTv5uSYDDRHxTEdDRCyV1AC8CbgnbV4eEY1Fn2PkTr6XVRknGbNtPUVy9jGpsDEilgFI2pA21ZBUQD28i2OsK3jeWrSvY+nzmoKf3wR+0cVxCgfot7p0J+lQkuXhvwmcQ1K/5gPAzC6OsyM7Khde2N7SxT5fcrcdcpIxKxIRL0maA3xW0g9i+wXX/kIyjtEer63M9F+ASRHx1E6+7h+BFyLiWx0NaQnfQpvp/sxmEbCPpPEdZzOSJpCMyxSXTDbbKf4rxKxrZ5L8/5gv6XhJb5L0RknHA28lGcO4h+Q2599KOlbSfpKmSfqmpK7ObrbnIuDjki6SdICkSZI+Ium73bxuCUly+ISkCZL+DTi+qM8zwL6SDpY0XFK/Lo5zD/B34L8kHZLeHfdfJMnvvp34HGbbcJIx60J6ZnIQcCdJBcO/kvzSPZdkEuPZERHAe0h+EV9HchfX/5BUfmzYife6C3gvyV1df0of55NUj9zR624FLgWuIJnHMx34elG3XwG3A/eSXHorTkKkn+O4dP8DwP3ASuC4dJ/ZLnNlTDMzy43PZMzMLDdOMmZmlhsnGTMzy42TjJmZ5cZJxszMcuMkY2ZmuXGSMTOz3DjJmJlZbpxkzMwsN/8fE06y5xfMH1UAAAAASUVORK5CYII="},5282:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/flappyBird-2b5f8813c4032f7a98af36ca8cd30554.jpg"}}]);
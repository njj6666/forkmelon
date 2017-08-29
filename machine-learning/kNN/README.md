# kNN 近邻算法
通过比较特征值来判断某一数据属于哪个分类。

设计数据：
将数据设计为二维数组型，每个特征就是一列。

算法：
1. 计算出待分类数据与已分类数据的“距离”。 距离算法：相应特征值相减，再平方，相加所有结果（n个特征值就有n个平方结果），开根号。
2. 将得出的与每个已分类数据的“距离”排序，得到前k个最近“距离”
3. 统计这k个最近的数据是什么分类的，最多的哪个分类就是待分类数据的分类。

例1
`docker build -t knn:latest .`
`docker run -it —-name knn —rm knn:latest`
In docker:
`python /usr/kNN/classify1.py`

例2.1
当有多个特征值时，可以使用散点图来观察分类的分布，从而选取更容易区分的特征来比较
`python2.7 plot.py`

例2.2
当特征值数字级别相差较大时（别特征A是0-1的值，特征B为100000以上），误差就比较大，需要先做数据的归一化，就是都化为0-1之间： newValue=(oldValue-min)/(max-min)
`docker build -t knn:latest .`
`docker run -it —-name knn —rm knn:latest`
In docker:
`python /usr/kNN/classify2.py`

例2.3
与用户互动，允许用户输入数据
`docker build -t knn:latest .`
`docker run -it —-name knn —rm knn:latest`
In docker:
`python /usr/kNN/classify3.py`


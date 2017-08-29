kNN 近邻算法
通过比较特征值来判断某一数据属于哪个分类。

设计数据：
将数据设计为二维数组型，每个特征就是一列。

算法：
1. 计算出待分类数据与已分类数据的“距离”。 距离算法：相应特征值相减，再平方，相加所有结果（n个特征值就有n个平方结果），开根号。
2. 将得出的与每个已分类数据的“距离”排序，得到前k个最近“距离”
3. 统计这k个最近的数据是什么分类的，最多的哪个分类就是待分类数据的分类。

例一：
docker build -t knn:latest .
docker run -it —-name knn —rm knn:latest
in docker:
python /usr/kNN/classify.py 
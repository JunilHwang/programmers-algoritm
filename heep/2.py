# https://programmers.co.kr/learn/courses/30/lessons/42629
# 현재 공장에 남아있는 밀가루 수량 stock
# 밀가루 공급 일정(dates)
# 해당 시점에 공급 가능한 밀가루 수량(supplies)
# 원래 공장으로부터 공급받을 수 있는 시점 k
# 밀가루가 떨어지지 않고 공장을 운영하기 위해서 최소한 몇 번 해외 공장으로부터 밀가루를 공급받아야 하는지
from heapq import heappush as push, heappop as pop

def solution(stock, d, s, k):
    cnt = 0
    i = 0
    h = []
    for now in d:
        push(h, -s[i])
        if stock - now <= 0 or stock - h[0] >= k-1:
            stock += -pop(h)
            cnt += 1
            if stock >= k-1 : break
        i += 1
    return cnt

print(solution(4, [5, 6, 7, 12], [4, 5, 9, 1], 10))
# 1 4
# 2 3
# 3 2
# 4 1
# 5 4
# 6 8
# 7 16
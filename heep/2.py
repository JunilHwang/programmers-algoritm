# https://programmers.co.kr/learn/courses/30/lessons/42629
# 현재 공장에 남아있는 밀가루 수량 stock
# 밀가루 공급 일정(dates)
# 해당 시점에 공급 가능한 밀가루 수량(supplies)
# 원래 공장으로부터 공급받을 수 있는 시점 k
# 밀가루가 떨어지지 않고 공장을 운영하기 위해서 최소한 몇 번 해외 공장으로부터 밀가루를 공급받아야 하는지
from heapq import heappush as push, heappop as pop

# 테스트 1 〉	통과 (3.05ms, 22.2MB)
# 테스트 2 〉	통과 (0.22ms, 18.3MB)
# 테스트 3 〉	통과 (1.01ms, 11.7MB)
def solution(stock, d, s, k):
    cnt = 0
    i = 0
    h = []
    for now in d:
        push(h, -s[i])
        if stock - now <= 0 or stock - h[0] >= k-1:
            print(now)
            stock += -pop(h)
            cnt += 1
            if stock >= k-1 : return cnt
        i += 1

# 테스트 1 〉	통과 (2.99ms, 22.3MB)
# 테스트 2 〉	통과 (0.63ms, 18.1MB)
# 테스트 3 〉	통과 (1.02ms, 11.8MB)
def solution2(stock, d, s, k):
    h = []
    d += [k]
    s += [0]
    cnt = i = 0
    for now in d :
        push(h, -s[i])
        while stock - now <= 0 :
            stock -= pop(h)
            cnt += 1
        if stock - now >= k - now : return cnt
        i+= 1

print(solution(4, [4, 10, 15], [20, 5, 10], 30))
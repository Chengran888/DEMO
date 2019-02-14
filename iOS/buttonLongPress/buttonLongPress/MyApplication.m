//
//  MyApplication.m
//  buttonLongPress
//
//  Created by CR on 2018/8/24.
//  Copyright © 2018年 CR. All rights reserved.
//

#import "MyApplication.h"
#import "ShareObject.h"


@implementation MyApplication




- (BOOL)sendAction:(SEL)action to:(id)target from:(id)sender forEvent:(UIEvent *)event {
    
    
   
    
    if ([sender isKindOfClass:NSClassFromString(@"UITabBarButton")] && [target isKindOfClass: NSClassFromString(@"UITabBar")]) {
        
        
        
       
        
        
        //屏蔽点击
        if ([NSStringFromSelector(action) isEqualToString:@"_buttonDown:"] || [NSStringFromSelector(action) isEqualToString:@"_buttonUp:"]) {
            
            if ([NSStringFromSelector(action) isEqualToString:@"_buttonDown:"]) {
                NSMutableDictionary *dic = [NSMutableDictionary dictionary];
                [dic setObject:NSStringFromSelector(action) forKey:@"action"];
                [dic setObject:target forKey:@"target"];
                [dic setObject:sender forKey:@"sender"];
                [dic setObject:event forKey:@"event"];
                [[ShareObject shareObject].mdic setObject:dic forKey:@"buttonDown"];
            } else {
                NSMutableDictionary *dic = [NSMutableDictionary dictionary];
                [dic setObject:NSStringFromSelector(action) forKey:@"action"];
                [dic setObject:target forKey:@"target"];
                [dic setObject:sender forKey:@"sender"];
                [dic setObject:event forKey:@"event"];
                [[ShareObject shareObject].mdic setObject:dic forKey:@"buttonUp"];
            }
            
            return NO;
            
        }
        
        
        if ([NSStringFromSelector(action) rangeOfString:@"+++++"].location != NSNotFound) {
            
            NSString *temp = NSStringFromSelector(action);
            NSString *endStr = [temp substringToIndex:[temp rangeOfString:@"+++++"].location];
            action = NSSelectorFromString(endStr);
            
        }
        
    }
    
    NSLog(@"----------action :%@, target :%@, sender :%@, event :%@", NSStringFromSelector(action),target,sender,event);
    return [super sendAction:action to:target from:sender forEvent:event];
    
    
    
    
    
}

@end
